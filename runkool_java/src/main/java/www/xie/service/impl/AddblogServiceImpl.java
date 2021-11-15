package www.xie.service.impl;

import www.xie.entity.Addact;
import www.xie.entity.Addblog;
import www.xie.dao.AddblogDao;
import www.xie.entity.Surrblog;
import www.xie.query.LimitQuery;
import www.xie.service.AddblogService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Addblog)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
@Service("addblogService")
public class AddblogServiceImpl implements AddblogService {
    @Resource
    private AddblogDao addblogDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Addblog queryById(Long id) {
        return this.addblogDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Addblog> queryAllByLimit(int offset, int limit) {
        return this.addblogDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param addblog 实例对象
     * @return 实例对象
     */
    @Override
    public Addblog insert(Addblog addblog) {
        Addblog addb = addblogDao.queryAll(addblog);
        if(addb!=null){
            return null;
        }
        this.addblogDao.insert(addblog);
        return addblog;
    }

    /**
     * 修改数据
     *
     * @param addblog 实例对象
     * @return 实例对象
     */
    @Override
    public Addblog update(Addblog addblog) {
        this.addblogDao.update(addblog);
        return this.queryById(addblog.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public void deleteById(Long userid,Long id) {
        this.addblogDao.deleteById(userid,id);
    }

    /**
     *
     * @param limitQuery
     * @return
     */
    public List<Addblog> queryProInfo(LimitQuery limitQuery){
        Long userid = limitQuery.getId();
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return this.addblogDao.queryProInfo(userid, offset, limit);
    }

}
