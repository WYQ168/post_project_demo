package com.sales.system.service;

import com.sales.system.domain.entity.Member;

import java.util.List;

/**
 * 会员 服务层
 * 
 * @author zhangtailong
 * @date 2022-09-06
 */
public interface IMemberService 
{
	/**
     * 查询会员信息
     * 
     * @param memberId 会员ID
     * @return 会员信息
     */
	public Member selectMemberById(Long memberId);
	
	/**
     * 查询会员列表
     * 
     * @param member 会员信息
     * @return 会员集合
     */
	public List<Member> selectMemberList(Member member);
	
	/**
     * 新增会员
     * 
     * @param member 会员信息
     * @return 结果
     */
	public int insertMember(Member member);
	
	/**
     * 修改会员
     * 
     * @param member 会员信息
     * @return 结果
     */
	public int updateMember(Member member);
		
	/**
     * 删除会员信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	public int deleteMemberByIds(String ids);
	
}
