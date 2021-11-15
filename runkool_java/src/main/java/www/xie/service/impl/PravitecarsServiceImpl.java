package www.xie.service.impl;

import org.apache.ibatis.annotations.Param;
import www.xie.entity.Pravitecars;
import www.xie.dao.PravitecarsDao;
import www.xie.query.LimitQuery;
import www.xie.service.PravitecarsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Pravitecars)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
@Service("pravitecarsService")
public class PravitecarsServiceImpl implements PravitecarsService {
    @Resource
    private PravitecarsDao pravitecarsDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Pravitecars queryById(Long id) {
        return this.pravitecarsDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Pravitecars> queryAllByLimit(int offset, int limit) {
        return this.pravitecarsDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param pravitecars 实例对象
     * @return 实例对象
     */
    @Override
    public Pravitecars insert(Pravitecars pravitecars) {
        this.pravitecarsDao.insert(pravitecars);
        return pravitecars;
    }

    /**
     * 修改数据
     *
     * @param pravitecars 实例对象
     * @return 实例对象
     */
    @Override
    public Pravitecars update(Pravitecars pravitecars) {
        this.pravitecarsDao.update(pravitecars);
        return this.queryById(pravitecars.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long id) {
        return this.pravitecarsDao.deleteById(id) > 0;
    }

    /**
     * 根据userid返回查询页
     * @param userid
     * @param limitQuery
     * @return
     */
    @Override
    public List<Pravitecars> queryPersonPunchCard(Long userid, LimitQuery limitQuery) {
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return pravitecarsDao.queryPersonPunchCard(userid,offset,limit);
    }

    /**
     * 个人打卡搜索
     * @param value
     * @param userid
     * @param limitQuery
     * @return
     */
    @Override
    public List<Pravitecars> searchPersonPunchCard(String value, Long userid, LimitQuery limitQuery) {
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return pravitecarsDao.searchPersonPunchCard("%"+value+"%",userid,offset,limit);
    }

    /**
     * 删除个人活动
     * @param id
     * @param userid
     */
    @Override
    public void deletePravitecard(Long id, Long userid) {
        pravitecarsDao.deletePravitecard(id,userid);
    }
}
