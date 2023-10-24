package lk.ijse.spring.carRental.controller;

import lk.ijse.spring.carRental.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

/**
 * `@authority` DUSHAN MALINDA
 * 20:11
 * 24/10/2023
 * ASUS
 * Back_End
 * lk.ijse.spring.carRental.config
 */
@RestController
@RequestMapping("/api/v1/upload")
@CrossOrigin
public class FileUploadController {
    private static final ArrayList<String> allImages = new ArrayList();

    public FileUploadController() {
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFile(@RequestPart("myFile") MultipartFile myFile, @RequestPart("myFile") byte[] isFile, @RequestPart("myFile") Part myPart) {
        System.out.println(isFile);
        System.out.println(myPart.getSubmittedFileName());


        System.out.println(myFile.getOriginalFilename());
        System.out.println(myPart.getSubmittedFileName());

        try {
            String projectPath = (new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI())).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));
            return new ResponseEntity("Successfully Uploaded", HttpStatus.OK);
        } catch (URISyntaxException var6) {
            var6.printStackTrace();
            return new ResponseEntity(var6.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IOException var7) {
            var7.printStackTrace();
            return new ResponseEntity(var7.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
