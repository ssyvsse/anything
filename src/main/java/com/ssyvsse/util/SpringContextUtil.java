package com.ssyvsse.util;

import org.springframework.context.ApplicationContext;

/**
 * @author llb
 *
 * @Date 2018年1月13日 下午2:19:48
 */
public class SpringContextUtil {

	private static ApplicationContext applicationContext;

	// 获取上下文
	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	// 设置上下文
	public static void setApplicationContext(ApplicationContext applicationContext) {
		SpringContextUtil.applicationContext = applicationContext;
	}

	// 通过名字获取上下文中的bean
	public static Object getBean(String name) {
		return applicationContext.getBean(name);
	}

	// 通过类型获取上下文中的bean
	public static Object getBean(Class<?> requiredType) {
		return applicationContext.getBean(requiredType);
	}
}
