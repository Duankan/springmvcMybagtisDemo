package cn.wtu.etc11304.test;

import cn.wtu.etc11304.util.ShiroUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.junit.Test;

import java.util.Arrays;


public class ShiroTest {

    /**
     * 通过ini配置文件玩shiro
     */
    @Test
    public void test(){
        // 读取配置文件，初始化SecurityManager工厂
        IniSecurityManagerFactory factory=new IniSecurityManagerFactory("classpath:shiro.ini");
        // 获取securityManager实例
        SecurityManager securityManager=factory.getInstance();
        // 把securityManager实例绑定到SecurityUtils
        SecurityUtils.setSecurityManager(securityManager);
        // 得到当前执行的用户
        Subject currentUser=SecurityUtils.getSubject();
        // 创建token令牌，用户名/密码
        UsernamePasswordToken token=new UsernamePasswordToken("java1234", "123456");
        try{
            // 身份认证
            currentUser.login(token);
            System.out.println("身份认证成功！");
        }catch(AuthenticationException e){
            e.printStackTrace();
            System.out.println("身份认证失败！");
        }
        // 退出
        currentUser.logout();
    }

    /**
     * 通过配置到数据库玩shiro
     */
    @Test
    public void test2(){
        // 读取配置文件，初始化SecurityManager工厂
        Factory<SecurityManager> factory=new IniSecurityManagerFactory("classpath:jdbc_realm.ini");
        // 获取securityManager实例
        SecurityManager securityManager=factory.getInstance();
        // 把securityManager实例绑定到SecurityUtils
        SecurityUtils.setSecurityManager(securityManager);
        // 得到当前执行的用户
        Subject currentUser=SecurityUtils.getSubject();
        // 创建token令牌，用户名/密码
        UsernamePasswordToken token=new UsernamePasswordToken("java1234", "123456");
        try{
            // 身份认证
            currentUser.login(token);
            System.out.println("身份认证成功！");
        }catch(AuthenticationException e){
            e.printStackTrace();
            System.out.println("身份认证失败！");
        }
        // 退出
        currentUser.logout();
    }
    /**
     * 测试权限和角色
     */
    @Test
    public void test3(){
        Subject currentUser= ShiroUtil.login("classpath:shiro.ini", "java1234", "123456");
        System.out.println(currentUser.hasRole("role1")?"有role1这个角色":"没有role1这个角色");
        boolean []results=currentUser.hasRoles(Arrays.asList("role1","role2","role3"));
        System.out.println(results[0]?"有role1这个角色":"没有role1这个角色");
        System.out.println(results[1]?"有role2这个角色":"没有role2这个角色");
        System.out.println(results[2]?"有role3这个角色":"没有role3这个角色");
        System.out.println(currentUser.hasAllRoles(Arrays.asList("role1","role2"))?"role1,role2这两个角色都有":"role1,role2这个两个角色不全有");

        currentUser.logout();
    }



}
