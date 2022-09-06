package com.sales.system.domain.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class MenuAuthEditReq implements Serializable {

    @ApiModelProperty(value = "权限标识")
    private String authKey;

    @ApiModelProperty(value = "旧的权限标识")
    private String oldAuthKey;

    @ApiModelProperty(value = "菜单ID集合")
    private List<Long>menuList;

}
