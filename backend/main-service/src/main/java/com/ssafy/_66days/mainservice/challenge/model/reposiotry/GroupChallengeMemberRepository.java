package com.ssafy._66days.mainservice.challenge.model.reposiotry;

import com.ssafy._66days.mainservice.challenge.model.entity.GroupChallenge;
import com.ssafy._66days.mainservice.challenge.model.entity.GroupChallengeMember;
import com.ssafy._66days.mainservice.challenge.model.entity.GroupChallengeMemberId;
import com.ssafy._66days.mainservice.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface GroupChallengeMemberRepository extends JpaRepository<GroupChallengeMember, GroupChallengeMemberId> {
    List<GroupChallengeMember> findByUser(User user);

    List<GroupChallengeMember> findByGroupChallenge(GroupChallenge groupChallenge);

    Optional<GroupChallengeMember> findByUserAndGroupChallenge(User user, GroupChallenge groupChallenge);


}
