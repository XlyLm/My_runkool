package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Addact;
import www.xie.entity.Addblog;
import www.xie.entity.Surrblog;
import www.xie.query.LimitQuery;
import www.xie.service.AddblogService;
import org.springframework.web.bind.annotation.*;
import www.xie.utils.ResponseData;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Addblog)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
@RestController
@RequestMapping("addblog")
public class AddblogController {
    /**
     * 服务对象
     */
    @Resource
    private AddblogService addblogService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Addblog selectOne(Long id) {
        return this.addblogService.queryById(id);
    }

    @ApiOperation(value = "获取加入部落信息",notes = "")
    @PostMapping("queryProInfo")
    public List<Addblog> queryProInfo(LimitQuery limitQuery){
        return  addblogService.queryProInfo(limitQuery);
    }

    @ApiOperation(value = "根据userid  id、surrblog表将该条数据删除",notes = "参数userid：user的id,id是addblog 的 id")
    @PostMapping("deleteById")
    public void deleteById(Long userid, Long id){
        this.addblogService.deleteById(userid, id);
    }

    @ApiOperation(value = "blog对象添加",notes = "")
    @PostMapping("insert")
    public String insert(Addblog addblog){
        addblog.setId(null);
        if(this.addblogService.insert(addblog)!=null){
            return "成功加入活动";
        }
        return null;
    }

    @ApiOperation(value = "修改人数",notes = "")
    @PostMapping("update")
    public void update(Addblog addblog){
        this.addblogService.update(addblog);
    }
}
