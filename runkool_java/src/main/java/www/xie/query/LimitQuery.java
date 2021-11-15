package www.xie.query;

public class LimitQuery {
    //定义分页查询对象
    private int offset;    //当前查询位置
    private  int limit;    //需查询多少条数据
    private Long id;    //用户

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LimitQuery(int offset, int limit, Long id) {
        this.offset = offset;
        this.limit = limit;
        this.id = id;
    }

    public LimitQuery(int offset, int limit) {
        this.offset = offset;
        this.limit = limit;
    }

    public LimitQuery() {
    }
}
