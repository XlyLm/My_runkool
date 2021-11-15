package www.xie.entity;

import java.io.Serializable;

/**
 * (Actions)实体类
 *
 * @author makejava
 * @since 2021-08-18 12:37:52
 */
public class Actions implements Serializable {
    private static final long serialVersionUID = -71127939267017246L;

    private Long id;

    private Long userid;

    private String name;

    private String time;

    private String address;

    private String img;

    private String type;

    private String isover;

    private Long e;

    private Long w;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getIsover() {
        return isover;
    }

    public void setIsover(String isover) {
        this.isover = isover;
    }

    public Long getE() {
        return e;
    }

    public void setE(Long e) {
        this.e = e;
    }

    public Long getW() {
        return w;
    }

    public void setW(Long w) {
        this.w = w;
    }
}
