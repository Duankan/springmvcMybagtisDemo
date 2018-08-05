package cn.wtu.etc11304.test;

import cn.wtu.etc11304.dao.UserPoMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;

public class CaseTest extends BaseTest{

//    @Autowired
//    ITbenterprisecertificateService tbenterprisecertificateService;
    @Resource
    UserPoMapper userPoMapper;



    @Test
    public void test(){
        System.out.println(userPoMapper);

    }
//
//    /**
//     * 测试想企业证书表中添加数据
//     */
//    @Test
//    public void test2(){
//        tbenterprisecertificatePo tpo = new tbenterprisecertificatePo();
//        tpo.setCertificateId(1);
//        tpo.setCityId(10001);
//        tpo.setCityName("武汉市");
//        tpo.setCompanyId(88);
//        tpo.setCompanyName("阿里巴巴");
//        tpo.setCreator("段康");
//        tbenterprisecertificatePoMapper.insertSelective(tpo);
//    }
}
