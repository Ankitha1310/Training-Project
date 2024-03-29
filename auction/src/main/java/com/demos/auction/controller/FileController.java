package com.demos.auction.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.demos.auction.userservice.FileService;

import java.io.IOException;
 @CrossOrigin
@RestController
public class FileController {
 
	private final FileService fileService;
 
	@Autowired
	public FileController(FileService fileService) {
		this.fileService = fileService;
	}
 
	@PostMapping(value = "/api/files")
	@ResponseStatus(HttpStatus.OK)
	public void handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {
		fileService.storeFile(file);
	} 
	
 
}