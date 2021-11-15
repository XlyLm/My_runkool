package www.xie.service;

import www.xie.entity.Userimgs;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Userimgs)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:58
 */
public interface UserimgsService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Userimgs queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Userimgs> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param userimgs 实例对象
     * @return 实例对象
     */
    Userimgs insert(Userimgs userimgs);

    /**
     * 修改数据
     *
     * @param userimgs 实例对象
     * @return 实例对象
     */
    Userimgs update(Userimgs userimgs);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

    /**
     * 根据图片类型查询
     * @param type 图片类型  banner：首页轮播图类型   nav：首页导航菜单图片类型
     * @return
     */
    List<Userimgs> queryImageByImagetype(String type);

    /**
     * 根据id分页查询
     * @param limitQuery
     * @return
     */
    List<Userimgs> queryImgByLimit(LimitQuery limitQuery);
}
