import React from "react";
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';



import FileThumbnail from "react-uploaded-video-preview";


<FileThumbnail
    file={file}
    // Optional:
    startTime={3000}
    canvasSize={900}
    startTimeFail={2}
    finalFail={"end"}
    DefaultFailedOrientation={"Horizontal"}
    altText={"Custom Alt Text for screen readers"}
    CustomFailedFileImageHorizontal={CustomFailedHorizontal}
    CustomFailedFileImageVertical={CustomFailedVertical}
    />
