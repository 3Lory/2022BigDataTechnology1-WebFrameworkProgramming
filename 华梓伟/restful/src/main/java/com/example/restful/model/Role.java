package com.example.restful.model;

import lombok.Data;

@Data
public class Role {
    private Integer id;
    private String name;
    private String nameZh;

    public String getRoleName() {
        return this.name;
    }
}
