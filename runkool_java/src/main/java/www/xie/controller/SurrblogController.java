package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Actions;
import www.xie.entity.Addblog;
import www.xie.entity.Surrblog;
import www.xie.query.LimitQuery;
import www.xie.service.SurrblogService;
import org.springframework.web.bind.annotation.*;
import www.xie.utils.ResponseData;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Surrblog)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
@RestController
@RequestMapping("surrblog")
public class SurrblogController {
    /**
     * 服务对象
     */
    @Resource
    private SurrblogService surrblogService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Surrblog selectOne(Long id) {
        return this.surrblogService.queryById(id);
    }

    /**
     * 通过userid查找部落
     * @param userid
     * @return
     */
    @ApiOperation(value = "通过userid查找部落",notes = "")
    @PostMapping("queryBlogByUserId")
    public List<Surrblog> queryBlogByUserId(Long userid){return this.surrblogService.queryBlogByUserId(userid);}

    @ApiOperation(value = "根据user的id分页返回surrblog表信息" ,notes = "参数id：user的id,page当前页数,limit 每页多少条 ")
    @PostMapping("querySurrblogInfoByUId")
    public List<Surrblog> querySurrblogInfoByUId(LimitQuery limitQuery){
        return surrblogService.querySurrblogInfoByUId(limitQuery);
    }

    @ApiOperation(value = "获取周围部落信息",notes = "")
    @PostMapping("queryProInfo")
    public List<Surrblog> queryProInfo(LimitQuery limitQuery){
        return  surrblogService.queryProInfo(limitQuery);
    }

    @ApiOperation(value = "根据userid  id、surrblog表将该条数据删除",notes = "参数userid：user的id,id是addblog 的 id")
    @PostMapping("deleteById")
    public void deleteById(Long userid, Long id){
        this.surrblogService.deleteById(userid, id);
    }

    @ApiOperation(value = "blog对象添加",notes = "")
    @PostMapping("insert")
    public String insert(Surrblog surrblog){
        surrblog.setId(null);
        if(this.surrblogService.insert(surrblog)!=null){
            return "成功加入活动";
        }
        return null;
    }

    @ApiOperation(value = "修改人数",notes = "")
    @PostMapping("update")
    public void update(Surrblog surrblog){
        this.surrblogService.update(surrblog);
    }
}
