package com.cementcenter.management.repositories;

import com.cementcenter.management.models.persistant.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthenticationDao extends CrudRepository<User,Long> {
}
