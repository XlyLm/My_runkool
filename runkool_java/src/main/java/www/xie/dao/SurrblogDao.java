package www.xie.dao;

import www.xie.entity.Surrblog;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Surrblog)表数据库访问层
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
public interface SurrblogDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Surrblog queryById(Long id);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Surrblog> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param surrblog 实例对象
     * @return 对象列表
     */
    Surrblog queryAll(Surrblog surrblog);

    /**
     * 新增数据
     *
     * @param surrblog 实例对象
     * @return 影响行数
     */
    int insert(Surrblog surrblog);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Surrblog> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Surrblog> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Surrblog> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Surrblog> entities);

    /**
     * 修改数据
     *
     * @param surrblog 实例对象
     * @return 影响行数
     */
    int update(Surrblog surrblog);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(@Param("userid")Long userid, @Param("id")Long id);

    /**
     * 通过userID查询部落
     *
     * @param userid
     * @return 实例对象
     */
    List<Surrblog> queryBlogByUserId(Long userid);

    /**
     * 通过userID分页查询部落
     *
     * @param userid
     * @return 实例对象
     */
    List<Surrblog> querySurrblogInfoByUId(@Param("userid")Long userid,@Param("offset")int offset,@Param("limit")int limit);
}

