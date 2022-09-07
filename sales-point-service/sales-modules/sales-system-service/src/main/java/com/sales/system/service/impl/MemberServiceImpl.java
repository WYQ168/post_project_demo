package com.sales.system.service.impl;

import java.util.List;

import com.sales.common.core.text.Convert;
import com.sales.system.domain.entity.Member;
import com.sales.system.mapper.MemberMapper;
import com.sales.system.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 会员 服务层实现
 * 
 * @author zhangtailong
 * @date 2022-09-06
 */
@Service
public class MemberServiceImpl implements IMemberService
{
	@Autowired
	private MemberMapper memberMapper;

	/**
     * 查询会员信息
     * 
     * @param memberId 会员ID
     * @return 会员信息
     */
    @Override
	public Member selectMemberById(Long memberId)
	{
	    return memberMapper.selectMemberById(memberId);
	}
	
	/**
     * 查询会员列表
     * 
     * @param member 会员信息
     * @return 会员集合
     */
	@Override
	public List<Member> selectMemberList(Member member)
	{
	    return memberMapper.selectMemberList(member);
	}
	
    /**
     * 新增会员
     * 
     * @param member 会员信息
     * @return 结果
     */
	@Override
	public int insertMember(Member member)
	{
	    return memberMapper.insertMember(member);
	}
	
	/**
     * 修改会员
     * 
     * @param member 会员信息
     * @return 结果
     */
	@Override
	public int updateMember(Member member)
	{
	    return memberMapper.updateMember(member);
	}

	/**
     * 删除会员对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	@Override
	public int deleteMemberByIds(String ids)
	{
		return memberMapper.deleteMemberByIds(Convert.toStrArray(ids));
	}
	
}
