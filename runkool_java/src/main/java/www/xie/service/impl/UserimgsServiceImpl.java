package www.xie.service.impl;

import www.xie.entity.Userimgs;
import www.xie.dao.UserimgsDao;
import www.xie.query.LimitQuery;
import www.xie.service.UserimgsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Userimgs)表服务实现类
 *
 * @author makejava
 * @since 2021-08-18 12:37:58
 */
@Service("userimgsService")
public class UserimgsServiceImpl implements UserimgsService {
    @Resource
    private UserimgsDao userimgsDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Userimgs queryById(Long id) {
        return this.userimgsDao.queryById(id);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Userimgs> queryAllByLimit(int offset, int limit) {
        return this.userimgsDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param userimgs 实例对象
     * @return 实例对象
     */
    @Override
    public Userimgs insert(Userimgs userimgs) {
        this.userimgsDao.insert(userimgs);
        return userimgs;
    }

    /**
     * 修改数据
     *
     * @param userimgs 实例对象
     * @return 实例对象
     */
    @Override
    public Userimgs update(Userimgs userimgs) {
        this.userimgsDao.update(userimgs);
        return this.queryById(userimgs.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long id) {
        return this.userimgsDao.deleteById(id) > 0;
    }

    /**
     * 个人那句图片类型获取
     * @param type 图片类型  banner：首页轮播图类型   nav：首页导航菜单图片类型
     * @return
     */
    @Override
    public List<Userimgs> queryImageByImagetype(String type) {
        Userimgs userimgs = new Userimgs();
        userimgs.setType(type);
        List<Userimgs> imgs = userimgsDao.queryAll(userimgs);
        return imgs;
    }

    /**
     * 根据id分页查询
     * @param limitQuery
     * @return
     */
    @Override
    public List<Userimgs> queryImgByLimit(LimitQuery limitQuery){
        Long userid = limitQuery.getId();
        int offset = limitQuery.getOffset();
        int limit = limitQuery.getLimit();
        return this.userimgsDao.queryImgByLimit(userid,offset, limit);
    }
}
