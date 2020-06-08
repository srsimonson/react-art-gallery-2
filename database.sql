CREATE TABLE "gallery_data" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(100) NOT NULL,
	"description" VARCHAR(100) NOT NULL,
	"likes" INTEGER
	);

INSERT INTO "gallery_data" ("path", "description", "likes")
VALUES 

('images/all_colors_smear.jpg', 'COLORS SMEAR BLUE ORANGE', 0),
('images/blue_orange_x.jpg', 'CANVAS BLUE ORANGE RED X', 0),
('images/blue_red_smear.jpg', 'BLUE RED SMEAR FILM', 0),
('images/green_grey_rip.jpg', 'GREEN GREY RIP BLACK', 0),
('images/orange_splat_rip.jpg', 'RED SPLAT RIP GESSO', 0),
('images/pink_blue_circles.jpg', 'PINK CIRCLES SMEAR BLUE', 0),
('images/purple_yellow_circles.jpg', 'CIRCLES COLORS CIRCLES LINES', 0),
('images/red_green_circles.jpg', 'RED SMEAR GREEN CIRCLES', 0),
('images/yellow_brown_splat.jpg', 'YELLOW BROWN SPLAT INVERSE', 0)
;
