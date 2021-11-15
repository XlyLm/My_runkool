package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Addact;
import www.xie.entity.Userimgs;
import www.xie.query.LimitQuery;
import www.xie.service.UserimgsService;
import org.springframework.web.bind.annotation.*;
import www.xie.utils.ResponseData;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Userimgs)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:58
 */
@RestController
@RequestMapping("userimgs")
public class UserimgsController {
    /**
     * 服务对象
     */
    @Resource
    private UserimgsService userimgsService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Userimgs selectOne(Long id) {
        return this.userimgsService.queryById(id);
    }

    @ApiOperation(value = "获取图片信息",notes = "根据图片类型获取图片信息，banner：首页轮播图  nav：导航菜单")
    @PostMapping("queryImageByImagetype")
    public List<Userimgs> queryImageByImagetype(String type){
        return userimgsService.queryImageByImagetype(type);
    }

    @ApiOperation(value = "分页获取图片",notes = "通过id分页查询")
    @PostMapping("queryImgByLimitId")
    public List<Userimgs> queryImgByLimit(LimitQuery limitQuery){return this.userimgsService.queryImgByLimit(limitQuery);}

    @ApiOperation(value = "根据userid name查询 添加图片",notes = "参数id：user的id name:图片的名字 比如show1.jpeg type:默认为show")
    @PostMapping("insert")
    public void insert(Userimgs userimgs){
        this.userimgsService.insert(userimgs);
    }

    @ApiOperation(value = "根据id查询删除图片",notes = "")
    @PostMapping("delet")
    public void delet(Long id){
        this.userimgsService.deleteById(id);
    }
}
