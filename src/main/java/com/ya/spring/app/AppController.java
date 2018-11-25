/**
*@author YasirAsiri
*@date 23 Nov. 2018
*@time 7:48:28 pm
*/
package com.ya.spring.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
	
	
    @RequestMapping("/")
    public String home() {
        return "index";

    }
}


