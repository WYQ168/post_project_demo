package com.sales.system.domain.response;

import com.sales.system.domain.entity.Menu;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class MenuAuthResp implements Serializable {

    @ApiModelProperty(value = "权限标识")
    private String authKey;

    @ApiModelProperty(value = "菜单列表")
    private List<Menu>menuList;

}
