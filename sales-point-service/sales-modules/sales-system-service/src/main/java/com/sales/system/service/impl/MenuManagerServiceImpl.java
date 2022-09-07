package com.sales.system.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.sales.common.core.exception.BaseException;
import com.sales.system.domain.entity.Menu;
import com.sales.system.domain.entity.MenuAuth;
import com.sales.system.domain.pojo.MenuPojo;
import com.sales.system.domain.request.MenuAuthEditReq;
import com.sales.system.domain.response.MenuAuthResp;
import com.sales.system.mapper.MenuAuthMapper;
import com.sales.system.mapper.MenuMapper;
import com.sales.system.domain.entity.SysUser;
import com.sales.system.domain.response.MenuResp;
import com.sales.system.enums.SystemEnum;
import com.sales.system.mapper.SysUserMapper;
import com.sales.system.service.MenuManagerService;
import com.sales.system.utils.UserDataUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @description: 菜单管理业务层
 * @author: wuyingqiang
 * @date: 2022-08-24 15:41
 */

@Service
public class MenuManagerServiceImpl implements MenuManagerService {

    @Autowired
    private MenuMapper menuMapper;
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private MenuAuthMapper menuAuthMapper;

    @Override
    public List<MenuResp> getMenuDataList() {
        List<Menu> menuList = menuMapper.selectList(Wrappers.<Menu>lambdaQuery()
                .eq(Menu::getDelFlag, Integer.parseInt(SystemEnum.DELETE_STATUS_1.getValue()))
        );
        List<Menu> oneList = menuList.stream().filter(entity -> Objects.isNull(entity.getPid()) || entity.getPid() == 0).collect(Collectors.toList());
        List<MenuResp> voList = new ArrayList<>();
        for (Menu menu : oneList) {
            MenuResp menuResp = new MenuResp();
            BeanUtils.copyProperties(menu, menuResp);
            menuResp.setChildren(menuList.stream().filter(entity -> !Objects.isNull(entity.getPid()) && entity.getPid().equals(menu.getId())).collect(Collectors.toList()));
            voList.add(menuResp);
        }
        return voList;
    }

    @Override
    public void addMenuData(Menu menu) {
        SysUser sysUser = UserDataUtils.getUserData();
        menu.setCreateTime(new Date());
        menu.setCreateBy(sysUser.getSysUserId());
        menu.setDelFlag(Boolean.FALSE);
        menuMapper.insert(menu);
    }

    @Override
    public void editMenuData(Menu menu) {
        SysUser sysUser = UserDataUtils.getUserData();
        Menu checkMenu = menuMapper.selectById(menu.getId());
        if (Objects.isNull(checkMenu)) {
            throw new BaseException("数据不存在");
        }
        checkMenu.setUpdateTime(new Date());
        checkMenu.setName(menu.getName());
        checkMenu.setComponent(menu.getComponent());
        checkMenu.setPid(menu.getPid());
        checkMenu.setSort(menu.getSort());
        checkMenu.setIcon(menu.getIcon());
        checkMenu.setPath(menu.getPath());
        checkMenu.setComponentName(menu.getComponentName());
        menuMapper.updateById(checkMenu);
    }

    @Override
    public List<MenuPojo> getRouterData() {
        SysUser sysUser = UserDataUtils.getUserData();
        List<Menu> menuList = menuMapper.getMenuByUserId(sysUser.getSysUserId());
        List<MenuPojo> voList = new ArrayList<>();
        List<Menu> oneList = menuList.stream().filter(entity -> entity.getPid() == 0L || Objects.isNull(entity.getPid())).collect(Collectors.toList());
        for (Menu menu : oneList) {
            List<Menu> twoList = menuList.stream().filter(entity -> !Objects.isNull(entity.getPid()) && entity.getPid().equals(menu.getId())).collect(Collectors.toList());
            MenuPojo menuPojo = new MenuPojo();
            menuPojo.setName(menu.getComponentName());
            menuPojo.setPath(menu.getPath());
            menuPojo.setHidden(menu.getHidden());
            menuPojo.setComponent(Objects.isNull(menu.getComponent()) ? "Layout" : menu.getComponent());
            MenuPojo.meta meta = new MenuPojo.meta();
            meta.setTitle(menu.getName());
            meta.setIcon(menu.getIcon());
            menuPojo.setMeta(meta);
            menuPojo.setAlwaysShow(true);
            menuPojo.setRedirect("noRedirect");
            List<MenuPojo> voTwoList = new ArrayList<>();
            for (Menu menu1 : twoList) {
                MenuPojo menuTwoPojo = new MenuPojo();
                menuTwoPojo.setName(menu1.getComponentName());
                menuTwoPojo.setPath(menu1.getPath());
                menuTwoPojo.setHidden(menu1.getHidden());
                menuTwoPojo.setComponent(Objects.isNull(menu1.getComponent()) ? "Layout" : menu1.getComponent());
                MenuPojo.meta metaTwo = new MenuPojo.meta();
                metaTwo.setTitle(menu1.getName());
                metaTwo.setIcon(menu1.getIcon());
                menuTwoPojo.setMeta(metaTwo);
                voTwoList.add(menuTwoPojo);
            }
            menuPojo.setChildren(voTwoList);
            voList.add(menuPojo);
        }
        return voList;
    }

    @Override
    public List<MenuAuthResp> getSysUserAuthList() {
        List<MenuAuthResp>voList=menuAuthMapper.getSysUserAuthList();
        List<Menu>allMenuList=menuMapper.selectList(Wrappers.<Menu>lambdaQuery()
            .eq(Menu::getDelFlag,Integer.valueOf(SystemEnum.DELETE_STATUS_1.getValue()))
        );
        List<Menu>allSourceList=checkMenuSort(allMenuList);
        for (MenuAuthResp menuAuthResp : voList) {
            allMenuList=new ArrayList<>();
            for (Menu entity : allSourceList) {
                Menu menu=new Menu();
                List<Menu>childrenList=new ArrayList<>();
                for (Menu child : entity.getChildren()) {
                    Menu menuChildren=new Menu();
                    BeanUtils.copyProperties(child,menuChildren);
                    childrenList.add(menuChildren);
                }
                BeanUtils.copyProperties(entity,menu);
                menu.setChecked(false);
                menu.setChildren(childrenList);
                allMenuList.add(menu);
            }
            menuAuthResp.setMenuList(checkMenuAuth(menuAuthResp,allMenuList));
        }
        return voList;
    }

    private List<Menu> checkMenuAuth(MenuAuthResp menuAuthResp,List<Menu>allMenuList){
        List<Menu>menuList=menuAuthResp.getMenuList().stream().filter(entity-> Objects.isNull(entity.getPid()) || entity.getPid()==0L).collect(Collectors.toList());
        for (Menu menu : menuList) {
            menu.setChildren(menuAuthResp.getMenuList().stream().filter(entity->!Objects.isNull(entity.getPid()) && entity.getPid().equals(menu.getId())).collect(Collectors.toList()));
        }
        List<Long>checkMenuId=menuList.stream().map(entity->{
            return entity.getId();
        }).collect(Collectors.toList());
        allMenuList.forEach(entity->{
            if (checkMenuId.contains(entity.getId())){
                entity.setChecked(true);
                Menu checkMenu=menuList.stream().filter(entityData->entityData.getId().equals(entity.getId())).collect(Collectors.toList()).get(0);
                List<Long>twoCheckIdList=checkMenu.getChildren().stream().map(twoEntity->{
                    return twoEntity.getId();
                }).collect(Collectors.toList());
                entity.getChildren().forEach(entityData->{
                    if (twoCheckIdList.contains(entityData.getId())){
                        entityData.setChecked(true);
                    }
                });
            }
        });
        return allMenuList;
    }

    private List<Menu> checkMenuSort(List<Menu>menuList){
        List<Menu>oneMenuList=menuList.stream().filter(entity-> Objects.isNull(entity.getPid()) || entity.getPid()==0L).collect(Collectors.toList());
        for (Menu menu : oneMenuList) {
            menu.setChildren(menuList.stream().filter(entity->!Objects.isNull(entity.getPid()) && entity.getPid().equals(menu.getId())).collect(Collectors.toList()));
        }
        return oneMenuList;
    }

    @Override
    public List<Menu> getMenuTreeList() {
        List<Menu>allMenuList=menuMapper.selectList(Wrappers.<Menu>lambdaQuery()
                .eq(Menu::getDelFlag,Integer.valueOf(SystemEnum.DELETE_STATUS_1.getValue()))
        );
        allMenuList=checkMenuSort(allMenuList);
        return allMenuList;
    }

    @Override
    public void deleteMenuAuthData(String authKey) throws Exception {
        Long checkCount=sysUserMapper.selectCount(Wrappers.<SysUser>lambdaQuery()
            .eq(SysUser::getDelFlag,Integer.valueOf(SystemEnum.DELETE_STATUS_1.getValue()))
            .eq(SysUser::getSysPermission,authKey)
        );
        if (checkCount>0){
            throw new Exception("该权限已使用，不可删除");
        }
        menuAuthMapper.delete(Wrappers.<MenuAuth>lambdaQuery()
            .eq(MenuAuth::getAuthKey,authKey)
        );
    }

    @Override
    public void addMenuAuthData(MenuAuthEditReq menuAuthEditReq) {
        menuAuthMapper.insertMenuAuthDataByList(menuAuthEditReq);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void editMenuAuthData(MenuAuthEditReq menuAuthEditReq) {
        menuAuthMapper.delete(Wrappers.<MenuAuth>lambdaQuery()
                .eq(MenuAuth::getAuthKey,menuAuthEditReq.getOldAuthKey())
        );
        menuAuthMapper.insertMenuAuthDataByList(menuAuthEditReq);
        SysUser sysUser=new SysUser();
        sysUser.setSysPermission(menuAuthEditReq.getAuthKey());
        sysUserMapper.update(sysUser,Wrappers.<SysUser>lambdaQuery()
            .eq(SysUser::getDelFlag,Integer.valueOf(SystemEnum.DELETE_STATUS_1.getValue()))
            .eq(SysUser::getSysPermission,menuAuthEditReq.getOldAuthKey())
        );
    }

}
