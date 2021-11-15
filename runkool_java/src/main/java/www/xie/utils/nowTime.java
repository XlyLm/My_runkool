package www.xie.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class nowTime {
    public static Boolean showTime(String time) throws ParseException {
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd kk:mm:ss");
        Date time1 = sdf.parse(sdf.format(d));
        Date time2 = sdf.parse(time);
        return time2.getTime()<time1.getTime()?true:false;
    }
}
