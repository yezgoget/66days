package com.ssafy._66days.challenge.model.dto.responseDTO;

import com.ssafy._66days.challenge.model.entity.GroupChallenge;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class GroupChallengeResponseDTO {
    private Long groupChallengeId;
    private String challengeManager;
    private String imagePath;
    private String challengeName;
    private Date startAt;
    private int maxMemberCount;
    private int memberCount;
    private List<String> profileImagePathList;

    public static GroupChallengeResponseDTO of(
            GroupChallenge groupChallenge,
            Date startAt,
            int memberCount,
            List<String> profileImagePathList
    ) {
        return GroupChallengeResponseDTO.builder()
                .groupChallengeId(groupChallenge.getGroupChallengeId())
                .challengeManager(groupChallenge.getChallengeManager())
                .imagePath(groupChallenge.getChallenge().getBadge().getImagePath())
                .challengeName(groupChallenge.getChallengeName())
                .startAt(startAt)
                .maxMemberCount(groupChallenge.getMaxMemberCount())
                .memberCount(memberCount)
                .profileImagePathList(profileImagePathList)
                .build();
    }
}
