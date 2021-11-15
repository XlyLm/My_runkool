package www.xie.service.impl;

import www.xie.entity.Actions;
import www.xie.entity.Addact;
import www.xie.dao.AddactDao;
import www.xie.query.LimitQuery;
import www.xie.service.AddactService;
import org.springframework.stereotype.Service;
import www.xie.utils.nowTime;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Addact)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
@Service("addactService")
public class AddactServiceImpl implements AddactService {
    @Resource
    private AddactDao addactDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Addact queryById(Long id) {
        return this.addactDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @return 对象列表
     */
    @Override
    public List<Addact> queryAllByLimit(LimitQuery limitQuery) {
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        Long id = limitQuery.getId();
        return this.addactDao.queryAllByLimitId(offset, limit, id);
    }

    /**
     * 新增数据
     *
     * @param addact 实例对象
     * @return 实例对象
     */
    @Override
    public Addact insert(Addact addact) {
        Addact act = this.addactDao.queryActByUN(addact.getUserid(),addact.getName(),addact.getTime(),addact.getAddress());
        if(act!=null){
            return null;
        }
        this.addactDao.insert(addact);
        return addact;
    }

    /**
     * 修改数据
     *
     * @param addact 实例对象
     * @return 实例对象
     */
    @Override
    public Addact update(Addact addact) {
        this.addactDao.update(addact);
        return this.queryById(addact.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long id) {
        return this.addactDao.deleteById(id) > 0;
    }

    /**
     * 更新活动
     * @return
     */
    public List<Addact> queryAllAddact(){
        List<Addact> addacts = this.addactDao.queryAllAddact();
        try {
            for (Addact act : addacts) {
                Boolean time = nowTime.showTime(act.getTime());
                if (time==true){
                    act.setIsover("true");
                    this.addactDao.update(act);
                }
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }

    /**
     * 搜索活动
     * @param
     * @param userid
     * @return
     */
    @Override
    public List<Addact> searchActions(String value, Long userid,LimitQuery limitQuery) {
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return this.addactDao.searchActions("%"+value+"%",userid,offset,limit);
    }

    /**
     * 创建活动
     * @param addact
     */
    public String creAction(Addact addact){
        Addact act = this.addactDao.queryActByUN(addact.getUserid(),addact.getName(),addact.getTime(),addact.getAddress());
        if(act==null){
            this.addactDao.insert(addact);
            return null;
        }else{
            return "已有该活动";
        }
    }
}
