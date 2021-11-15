package www.xie.service.impl;

import www.xie.entity.Actions;
import www.xie.dao.ActionsDao;
import www.xie.entity.Addact;
import www.xie.query.LimitQuery;
import www.xie.service.ActionsService;
import org.springframework.stereotype.Service;
import www.xie.utils.nowTime;

import javax.annotation.Resource;
import java.sql.Array;
import java.util.List;

/**
 * (Actions)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:52
 */
@Service("actionsService")
public class ActionsServiceImpl implements ActionsService {
    @Resource
    private ActionsDao actionsDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Actions queryById(Long id) {
        return this.actionsDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     *limitQuery
     * @return 对象列表
     */
    @Override
    public List<Actions> queryAllByLimit(LimitQuery limitQuery) {
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return this.actionsDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param actions 实例对象
     * @return 实例对象
     */
    @Override
    public Actions insert(Actions actions) {
        this.actionsDao.insert(actions);
        return actions;
    }

    /**
     * 修改数据
     *
     * @param actions 实例对象
     * @return 实例对象
     */
    @Override
    public Actions update(Actions actions) {
        this.actionsDao.update(actions);
        return this.queryById(actions.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long id) {
        return this.actionsDao.deleteById(id) > 0;
    }

    /**
     * 更新活动
     * @return
     */
    public List<Actions> queryAllActions(){
        List<Actions> actions = this.actionsDao.queryAllActions();
        try {
            for (Actions act : actions) {
                Boolean time = nowTime.showTime(act.getTime());
                if (time==true){
                    act.setIsover("true");
                    this.actionsDao.update(act);
                }
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }

    /**
     * 创建活动
     * @param action
     */
    public String creAction(Actions action){
        System.out.println(action.getUserid());
        Actions act = this.actionsDao.queryActByUN(action.getUserid(),  action.getName(),action.getTime(),action.getAddress());
        if(act==null){
            this.actionsDao.insert(action);
            return null;
        }else{
            return "已有该活动";
        }
    }
}
