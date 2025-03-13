
import { bootstrapCameraKit } from '@snap/camera-kit';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lens-studio/', // Change to your GitHub repo name
});

(async function () {
  try {
    console.log('Initializing Camera Kit...');
    const cameraKit = await bootstrapCameraKit({
      apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQxMzM0MjI2LCJzdWIiOiJkMGU1OWFkOC01NjA0LTQyYWEtYTExZS05YzE5MzRmMmE5YTZ-UFJPRFVDVElPTn4xZDJhODA3Ny1hYTQ4LTRjY2QtOTk2ZS1kNDM5ZDNlYTZjOGYifQ.orx1cX1yQJTzdDw_3yr1ey1pLoOWhXs3-Hrs-DGXM8A',
    });
 

    const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
    

    const session = await cameraKit.createSession({ liveRenderTarget });


    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });


    await session.setSource(mediaStream);


    await session.play();



    const lens = await cameraKit.lensRepository.loadLens(
      '2566fb54-d7a0-4403-a07d-8c27d9c91286', // Lens ID
      '7c28b8f6-45f8-4932-81c9-6e07e16d28ef'  // Lens Group ID
    );

    await session.applyLens(lens);

  } catch (error) {

  }
})();
