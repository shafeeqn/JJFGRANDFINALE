<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow of Links</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        .slideshow-container {
            text-align: center;
            padding: 20px;
            border: 2px solid #ddd;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .slide {
            display: none;
            font-size: 1.5rem;
        }
        .slide a {
            text-decoration: none;
            color: #007BFF;
        }
        .slide a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="slideshow-container">
        
        <div class="slide"><iframe src="https://jjf25c.vercel.app/score-board/general" width="1000" height="1000" style="border: none;">GENERAL</iframe></div>
        <div class="slide"><iframe src="https://jjf25c.vercel.app/score-board/super-senior" width="1000" height="1000" style="border: none;">SUPER SENIOR</iframe></div>
        <div class="slide"><iframe src="https://jjf25c.vercel.app/score-board/senior" width="1000" height="1000" style="border: none;">SENIOR</iframe></div>
        <div class="slide"><iframe src="https://jjf25c.vercel.app/score-board/junior" width="1000" height="1000" style="border: none;">JUNIOR</iframe></div>
        <div class="slide"><iframe src="https://jjf25c.vercel.app/score-board/sub-junior" width="1000" height="1000" style="border: none;">SUB-JUNIOR</iframe></div>
        
    </div>

    <script>
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function startSlideshow() {
            showSlide(currentIndex);
            setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }, 3000); // Change slide every 3 seconds
        }

        window.onload = startSlideshow;
    </script>
</body>
</html>
