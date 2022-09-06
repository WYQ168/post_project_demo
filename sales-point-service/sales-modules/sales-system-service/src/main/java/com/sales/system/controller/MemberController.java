package com.sales.system.controller;

import java.util.List;

import com.sales.common.core.utils.poi.ExcelUtil;
import com.sales.common.core.web.controller.BaseController;
import com.sales.common.core.web.domain.AjaxResult;
import com.sales.common.core.web.page.TableDataInfo;
import com.sales.common.log.annotation.Log;
import com.sales.common.log.enums.BusinessType;
import com.sales.common.security.annotation.RequiresPermissions;
import com.sales.system.domain.entity.Member;
import com.sales.system.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 会员 信息操作处理
 * 
 * @author zhangtailong
 * @date 2022-09-06
 */
@Controller
@RequestMapping("/system/member")
public class MemberController extends BaseController
{
    private String prefix = "system/member";
	
	@Autowired
	private IMemberService memberService;

	/**
	 * 查询会员列表
	 */
	@RequiresPermissions("system:member:list")
	@PostMapping("/list")
	@ResponseBody
	public TableDataInfo list(Member member)
	{
		startPage();
        List<Member> list = memberService.selectMemberList(member);
		return getDataTable(list);
	}

	
	/**
	 * 新增保存会员
	 */
	@RequiresPermissions("system:member:add")
	@Log(title = "会员", businessType = BusinessType.INSERT)
	@PostMapping("/add")
	@ResponseBody
	public AjaxResult addSave(Member member)
	{		
		return toAjax(memberService.insertMember(member));
	}

	/**
	 * 修改会员
	 */
	@GetMapping("/edit/{memberId}")
	public String edit(@PathVariable("memberId") Long memberId, ModelMap mmap)
	{
		Member member = memberService.selectMemberById(memberId);
		mmap.put("member", member);
	    return prefix + "/edit";
	}
	
	/**
	 * 修改保存会员
	 */
	@RequiresPermissions("system:member:edit")
	@Log(title = "会员", businessType = BusinessType.UPDATE)
	@PostMapping("/edit")
	@ResponseBody
	public AjaxResult editSave(Member member)
	{		
		return toAjax(memberService.updateMember(member));
	}
	
	/**
	 * 删除会员
	 */
	@RequiresPermissions("system:member:remove")
	@Log(title = "会员", businessType = BusinessType.DELETE)
	@PostMapping( "/remove")
	@ResponseBody
	public AjaxResult remove(String ids)
	{		
		return toAjax(memberService.deleteMemberByIds(ids));
	}
	
}
