package www.xie.service.impl;

import org.apache.ibatis.annotations.Param;
import www.xie.entity.Addact;
import www.xie.entity.Surrblog;
import www.xie.dao.SurrblogDao;
import www.xie.query.LimitQuery;
import www.xie.service.SurrblogService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Surrblog)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
@Service("surrblogService")
public class SurrblogServiceImpl implements SurrblogService {
    @Resource
    private SurrblogDao surrblogDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Surrblog queryById(Long id) {
        return this.surrblogDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Surrblog> queryAllByLimit(int offset, int limit) {
        return this.surrblogDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param surrblog 实例对象
     * @return 实例对象
     */
    @Override
    public Surrblog insert(Surrblog surrblog) {
        Surrblog act = this.surrblogDao.queryAll(surrblog);
        if(act!=null){
            return null;
        }
        this.surrblogDao.insert(surrblog);
        return surrblog;
    }

    /**
     * 修改数据
     *
     * @param surrblog 实例对象
     * @return 实例对象
     */
    @Override
    public Surrblog update(Surrblog surrblog) {
        this.surrblogDao.update(surrblog);
        return this.queryById(surrblog.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public void deleteById(Long userid,Long id) {
        this.surrblogDao.deleteById(userid,id);
    }

    /**
     * 通过userid查找部落
     * @param userid
     * @return
     */
    @Override
    public List<Surrblog> queryBlogByUserId(Long userid){
        return this.surrblogDao.queryBlogByUserId(userid);
    }

    /**
     *
     * @param limitQuery
     * @return
     */
    @Override
    public List<Surrblog> querySurrblogInfoByUId(LimitQuery limitQuery){
        Long userid = limitQuery.getId();
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return this.surrblogDao.querySurrblogInfoByUId(userid, offset, limit);
    }

    /**
     *
     * @param limitQuery
     * @return
     */
    @Override
    public List<Surrblog> queryProInfo(LimitQuery limitQuery){
        int offset = limitQuery.getOffset();
        int limit =  limitQuery.getLimit();
        return queryAllByLimit(offset,limit);
    }
}
