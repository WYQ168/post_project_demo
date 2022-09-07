package com.sales.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.sales.system.domain.entity.Menu;
import com.sales.system.domain.entity.MenuAuth;
import com.sales.system.domain.request.MenuAuthEditReq;
import com.sales.system.domain.response.MenuAuthResp;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MenuAuthMapper extends BaseMapper<MenuAuth> {
    int deleteByPrimaryKey(Long authId);

    int insert(MenuAuth record);

    int insertSelective(MenuAuth record);

    MenuAuth selectByPrimaryKey(Long authId);

    int updateByPrimaryKeySelective(MenuAuth record);

    int updateByPrimaryKey(MenuAuth record);

    /**
     * 获取权限菜单列表
     * @return
     */
    List<MenuAuthResp> getSysUserAuthList();

    /**
     * 获取菜单列表
     * @param authKey 权限标识
     * @return
     */
    List<Menu>getMenuDataListByAuthKey(@Param("authKey")String authKey);

    /**
     * 新增菜单权限
     * @param menuAuthEditReq
     */
    void insertMenuAuthDataByList(@Param("params") MenuAuthEditReq menuAuthEditReq);

}