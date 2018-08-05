package cn.wtu.etc11304.test;

import cn.wtu.etc11304.shiro.CustomerRealm;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.mgt.DefaultSecurityManager;
import org.apache.shiro.subject.Subject;
import org.junit.Test;

public class CustomerRealmTest {

    @Test
    public void test(){
        CustomerRealm customerRealm = new CustomerRealm();
        //1.构建SecurityManager环境
        DefaultSecurityManager defaultSecurityManager=new DefaultSecurityManager();
        defaultSecurityManager.setRealm(customerRealm);
        //shiro加密
        HashedCredentialsMatcher matcher = new HashedCredentialsMatcher();
        matcher.setHashAlgorithmName("md5");
        matcher.setHashIterations(1);//加密次数
        customerRealm.setCredentialsMatcher(matcher);
        //2.主体提交认证请求
        SecurityUtils.setSecurityManager(defaultSecurityManager);
        Subject subject = SecurityUtils.getSubject();

        UsernamePasswordToken token = new UsernamePasswordToken("Mark","123456");
        subject.login(token);
        Action1();
//        System.out.println("isAuthenticated:"+subject.isAuthenticated());
//        subject.checkRole("admin");
//        subject.checkPermissions("user:delete","user:add");
    }

//    @RequiresPermissions("user:a")
    public void Action1(){
        System.out.println("只有管理员才能调的方法！");
    }
}
