package cn.wtu.etc11304.shiro;

import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

public class MyShiroReaml extends AuthorizingRealm {

    /**
     * 登录验证成功后，进行角色和权限的授权
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }

    /**
     * 验证登录
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("shiro认证进来了！");
        //验证账号和密码
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        String username = token.getUsername();
        //中间省略根据username从数据库中拿数据
        //参数进行初步的简单认证
        try {
            AuthenticationInfo info = new SimpleAuthenticationInfo("ljiu","ljiu","MyShiroReaml");
            return info;
        }
        catch (Exception e){
            e.printStackTrace();
        }
return null;
    }
}
