package www.xie.entity;

import java.io.Serializable;

/**
 * (Pravitecars)实体类
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public class Pravitecars implements Serializable {
    private static final long serialVersionUID = 256984201668834632L;

    private Long id;

    private Long userid;

    private String name;

    private String time;

    private String address;


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

}
