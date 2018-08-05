package cn.wtu.etc11304.controller;

import cn.wtu.etc11304.dto.UserRequst;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * 企业证书管理控制器
 */
@Controller
@RequestMapping("/user")
public class UserController {
    /**
     * 跳到list页面
     * @return
     */
    @RequestMapping("/list")
    public ModelAndView list(){
        ModelAndView view = new ModelAndView("view/list");
        return view;
    }

    @RequestMapping("/select")
    public ModelAndView select(){
        ModelAndView view = new ModelAndView("view/select");
        return view;
    }
    @RequestMapping("selectAfter")
    @ResponseBody
    public Map selectAfter(String select){
        Map<String,Object> map = new HashMap<>();
        map.put("cg",select);
        return map;
    }

    @RequiresRoles("admin")
    @RequestMapping("/echarts")
    @ResponseBody
    public ModelAndView echarts(){
        ModelAndView view = new ModelAndView("view/echarts");
        return view;
    }

    //调到登录ui
    @RequestMapping("/login")
    @ResponseBody
    public ModelAndView login(UserRequst requst,HttpSession session,Model model){
        ModelAndView loginView = new ModelAndView("/login.jsp");
        ModelAndView suvccessView = new ModelAndView("/view/success");
        if(requst==null||requst.getUsername()==null||requst.getPassword()==null){
            return loginView;
        }
        //主体,当前状态为没有认证的状态“未认证”
        Subject subject = SecurityUtils.getSubject();
        // 登录后存放进shiro token
        UsernamePasswordToken token=new UsernamePasswordToken(requst.getUsername(),requst.getPassword());
        UserRequst user;
        //登录方法（认证是否通过）
        //使用subject调用securityManager,安全管理器调用Realm
        try {
            //利用异常操作
            //需要开始调用到Realm中
            System.out.println("========================================");
            System.out.println("1、进入认证方法");
            subject.login(token);
//            user = (UserRequst) subject.getPrincipal();
//            session.setAttribute("user",subject);
            model.addAttribute("message", "登录完成");
            System.out.println("登录完成");
        }
        catch (Exception e){
            model.addAttribute("message", "账号密码不正确");
            return loginView;
            //return new ModelAndView("/view/login.jsp");
        }
//        ModelAndView view = new ModelAndView("/view/success");
//        return view;
        return suvccessView;

    }

    //登录
    @RequestMapping("/loginHandle")
    @ResponseBody
    public ModelAndView loginHandle(UserRequst requst,HttpSession session,Model model){
        //主体,当前状态为没有认证的状态“未认证”
        Subject subject = SecurityUtils.getSubject();
        // 登录后存放进shiro token
        UsernamePasswordToken token=new UsernamePasswordToken(requst.getUsername(),requst.getPassword());
        UserRequst user;
        //登录方法（认证是否通过）
        //使用subject调用securityManager,安全管理器调用Realm
        try {
            //利用异常操作
            //需要开始调用到Realm中
            System.out.println("========================================");
            System.out.println("1、进入认证方法");
            subject.login(token);
            user = (UserRequst) subject.getPrincipal();
            session.setAttribute("user",subject);
            model.addAttribute("message", "登录完成");
            System.out.println("登录完成");
        }
        catch (Exception e){
            model.addAttribute("message", "账号密码不正确");
            return new ModelAndView("/login.jsp");
        }
        ModelAndView view = new ModelAndView("/view/success");
        return view;
    }


}
