package com.ssafy._66days.mono.user.model.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy._66days.mono.user.model.entity.User;

public interface UserRepository extends JpaRepository<User, UUID> {
	// 엥????
	Optional<UUID> findUserIdByNickname(String nickname);

	Optional<User> findByNickname(String userName);

    Optional<User> findByEmail(String email);

	Optional<User> findById(UUID userId);
}
