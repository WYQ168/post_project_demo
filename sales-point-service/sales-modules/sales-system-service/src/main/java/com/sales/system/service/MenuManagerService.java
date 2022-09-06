package com.sales.system.service;

import com.sales.system.domain.entity.Menu;
import com.sales.system.domain.pojo.MenuPojo;
import com.sales.system.domain.request.MenuAuthEditReq;
import com.sales.system.domain.response.MenuAuthResp;
import com.sales.system.domain.response.MenuResp;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface MenuManagerService {


    /**
     * 获取菜单列表
     *
     * @return
     */
    List<MenuResp> getMenuDataList();

    /**
     * 新增菜单信息
     *
     * @param menu
     */
    void addMenuData(Menu menu);

    /**
     * 编辑菜单信息
     *
     * @param menu
     */
    void editMenuData(Menu menu);

    /**
     * 获取用户菜单权限列表
     *
     * @return
     */
    List<MenuPojo> getRouterData();

    /**
     * 获取系统用户权限标识
     * @return
     */
    List<MenuAuthResp>getSysUserAuthList();

    /**
     * 获取菜单树形数据
     * @return
     */
    List<Menu> getMenuTreeList();

    /**
     * 删除菜单权限
     * @param authKey 权限标识
     */
    void deleteMenuAuthData(String authKey) throws Exception;

    /**
     * 新增菜单权限
     * @param menuAuthEditReq
     */
    void addMenuAuthData(MenuAuthEditReq menuAuthEditReq);

    /**
     * 编辑菜单权限
     * @param menuAuthEditReq
     */
    void editMenuAuthData(MenuAuthEditReq menuAuthEditReq);

}
