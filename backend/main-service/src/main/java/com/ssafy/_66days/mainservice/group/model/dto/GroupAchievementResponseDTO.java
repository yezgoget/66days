package com.ssafy._66days.mainservice.group.model.dto;

import com.ssafy._66days.mainservice.group.model.entity.GroupAchievement;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class GroupAchievementResponseDTO {
    private String imagePath;
    private String challengeName;
    private Long challengeId;
    private int achievementCount;

    public static GroupAchievementResponseDTO of(GroupAchievement groupAchievement) {
        return GroupAchievementResponseDTO.builder()
                .imagePath(groupAchievement.getChallenge().getBadgeImage())
                .challengeName(groupAchievement.getChallenge().getTopic())
                .challengeId(groupAchievement.getChallenge().getChallengeId())
                .achievementCount(groupAchievement.getAchievementCount())
                .build();
    }
}
