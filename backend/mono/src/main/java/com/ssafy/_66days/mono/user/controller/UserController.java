package com.ssafy._66days.mono.user.controller;

import com.ssafy._66days.mono.page.model.dto.MainPageResponseDTO;
import com.ssafy._66days.mono.page.model.service.PageService;
import com.ssafy._66days.mono.user.model.dto.UserSocialRegistParamDTO;
import com.ssafy._66days.mono.user.model.service.JwtService;
import com.ssafy._66days.mono.user.model.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserController {

	private final UserService userService;
	private final JwtService jwtService;
	private final PageService pageService;

	@PatchMapping("/modify/{nickname}")
	public ResponseEntity<Boolean> modifyNickname(@RequestHeader("Authorization") String token,
											  @RequestParam(value = "nickname") String nickname
											  ) {

		jwtService.validateToken(token);
		UUID userId = jwtService.getUserId(token);
		log.info("Modify nickname userId: {}",userId);

		try {
			userService.modifyNickname(userId, nickname);
		} catch (Exception e){
			log.error(e.getMessage());
			return ResponseEntity.ok(false);
		}

		return ResponseEntity.ok(true);
	}

	@PatchMapping("/modify/image")
	public ResponseEntity<Boolean> modifyImage(@RequestHeader("Authorization") String token,
												  @RequestPart(value = "image") MultipartFile image
	) {

		jwtService.validateToken(token);
		UUID userId = jwtService.getUserId(token);
		log.info("Modify nickname userId: {}",userId);

		try {
			userService.modifyPofileImage(userId, image);
		} catch (Exception e){
			log.error(e.getMessage());
			return ResponseEntity.ok(false);
		}

		return ResponseEntity.ok(true);
	}

	@GetMapping("/check-nickname/{nickname}")
	public ResponseEntity<Boolean> isNicknameAvailable(@PathVariable String nickname) {
		boolean isAvailable = userService.isNicknameAvailable(nickname);
		return ResponseEntity.ok(!isAvailable);
	}

	@ApiOperation(value = "소셜 회원가입", notes = "소셜 회원의 회원가입을 진행합니다.")
	@PostMapping("/social")
	public ResponseEntity<Map<String, String>> socialRegistration(
			@RequestBody @ApiParam(required = true) UserSocialRegistParamDTO userDTO
	) {

		log.info("Social Regist Info : {}", userDTO);
		Map<String, String> resultMap = new HashMap<String, String>();

		userService.socialRegist(userDTO);
		return new ResponseEntity<Map<String, String>>(resultMap, HttpStatus.OK);
	}

	@GetMapping()
	public ResponseEntity<Map<String, Object>> getMainPage(@RequestHeader("Authorization") String token) {
		Map<String, Object> resultMap = new HashMap<String, Object>();

		try {
			jwtService.validateToken(token);
			UUID userId = jwtService.getUserId(token);
			MainPageResponseDTO mainPageResponseDTO = pageService.getMainPage(userId);
			resultMap.put("mainPageResponseDTO", mainPageResponseDTO);
			return ResponseEntity.status(HttpStatus.OK).body(resultMap);

		} catch (Exception e) {
			log.error(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resultMap);
		}
	}
}
