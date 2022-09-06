package com.sales.system.domain.entity;

import com.sales.common.core.web.domain.BaseEntity;
import io.swagger.annotations.ApiModel;
import lombok.Data;


/**
 * 会员表 t_member
 * 
 * @author zhangtailong
 * @date 2022-09-06
 */
@ApiModel(value = "com-sales-app-domain-entity-Member")
@Data
public class Member extends BaseEntity
{
	private static final long serialVersionUID = 1L;
	
	/** 会员id */
	private Long memberId;
	/** 机具id */
	private Long machineId;
	/** 会员名字 */
	private String memberName;
	/** 注册时间 */
	private String registerTime;
	/** 上级的id （会员上下级（一、二级）） */
	private String userId;
	/** 会员等级（可后台操作） */
	private String memberGrade;
	/** 状态 (注销 停用) */
	private String status;
}
