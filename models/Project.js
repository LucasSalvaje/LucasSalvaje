var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Project.add({
	title: { type: String, required: true },
	bgColor :{ type: Types.Color,label: "Color del fondo" },
	state: { type: Types.Select, options: 'hidden, published, archived', default: 'published', index: true },
	position: { type: String, default: '000'},

	featrueText: { type: Types.Html, wysiwyg: false, height: 50 },

	Label_Text_Client: { type: String, label: "Label Text I", default: 'Client'},
	client : { type: String },

	Label_Text_Producer: { type: String, label: "Label Text II", default: 'Producer'},
	producer: { type: String},

	Label_Text_Disciplines: { type: String, label: "Label Text III", default: 'Disciplines'},
	categories: { type: Types.Relationship, ref: 'ProjectCategory', many: true },

	content: {
		brief: { type: Types.Html, wysiwyg: false, height: 80 },
		loop: { type: Types.Html, wysiwyg: false, height: 80 },
		extended: { type: Types.Html, wysiwyg: true, height: 150},
		addition: { type: Types.Html, wysiwyg: true, height: 150 },
		pill: { type: Types.Html, wysiwyg: false },
		pill_2: { type: Types.Html, wysiwyg: false },
		cierre: { type: Types.Html, wysiwyg: true, height: 150},
	},


	heroImage: { type: Types.CloudinaryImage },
	heroVideo: { type: String },
	heroVideoPositionX: { type: Number, default: -5, note:"Posición X en % / -5% default" },
	heroVideoPositionY: { type: Number, default: -22, note:"Posición Y en % / -22% default" },

	image_00: { type: Types.CloudinaryImage, label: "Img 0" },
	image_01: { type: Types.CloudinaryImage, label: "Img 1" },
	image_0y1_info: { type: String, label: "Info Img 0 y 1"},

	image_02: { type: Types.CloudinaryImage, label: "Img 2"},
	IMG02_info: { type: String, label: "Info Img 2" },

	video_00: {type: String, label: "Video 0", note:"Opcional | Vimeo video number" },
	video_00_info: { type: String, label: "Info video 0" },

	image_03: { type: Types.CloudinaryImage, label: "Img 3" },
	image_04: { type: Types.CloudinaryImage, label: "Img 4" },
	image_3y4_info: { type: String, label: "Info img3 and img4"},


	video_01: {type: String, label: "Video 1", note:"Opcional | Vimeo video number"},
	video_01_info : { type: String, label: "Info Video 1"},

	video_02: {type: String, label: "Video 2", note:"Opcional | Vimeo video number" },
	video_02_info : { type: String, label: "Info Video 2"},

	image_05: { type: Types.CloudinaryImage, label: "Img 5 A", note:"Imagen vertical | Izquierdfa" },
	image_05B: { type: Types.CloudinaryImage, label: "Img 5 B", note:"Imagen vertical | Derecha" },
	IMG05_info: { type: String, label: "Info Img 5 A + B" },

	image_06: { type: Types.CloudinaryImage, label: "Img 6" },
	IMG06_info: { type: String , label: "Info Img 6"},

	video_03: {type: String, label: "Video 3", note:"Opcional | Vimeo video number" },
	video_03_info : { type: String, label: "Info Video 3"},

	image_07: { type: Types.CloudinaryImage , label: "Img 7"},
	IMG07_info: { type: String, label: "Info Img 7" },

	video_04: {type: String, label: "Video 4", note:"Opcional | Vimeo video number" },
	video_04_info : { type: String, label: "Info Video 4"},


	color_01: { type: Boolean,  default: false, index: true },
	_01_HEX : { type: Types.Color, dependsOn: { color_01: true }, note:"Debe incluir #", label: "Color 01"},

	color_02: { type: Boolean,  default: false, index: true },
	_02_HEX : { type: Types.Color, dependsOn: { color_02: true}, note:"Debe incluir #", label: "Color 02" },

	color_03: { type: Boolean,  default: false, index: true },
	_03_HEX : { type: Types.Color, dependsOn: { color_03: true}, note:"Debe incluir #", label: "Color 03" },

	color_04: { type: Boolean,  default: false, index: true },
	_04_HEX : { type: Types.Color, dependsOn: { color_04: true}, note:"Debe incluir #", label: "Color 04" },

	color_05: { type: Boolean,  default: false, index: true },
	_05_HEX : { type: Types.Color, dependsOn: { color_05: true}, note:"Debe incluir #", label: "Color 05" },

	credits: { type: Types.Html, wysiwyg: false, height: 150 , note:"Incluir la etiqueta p"},


	image_08: { type: Types.CloudinaryImage, label: "Imagen Final"},

	image_projects_01: { type: Types.CloudinaryImage , label: "Back to projects IMG left"},
	image_projects_03: { type: Types.CloudinaryImage , label: "Back to projects IMG Center"},
	image_projects_02: { type: Types.CloudinaryImage , label: "Back to projects IMG right"},
	buttonText_PROJECT: { type: String, label: "Button Text", default: 'View all projects'},

});


Project.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Project.defaultColumns = 'position|10%, title|20%, featrueText, heroImage, state';
Project.defaultSort = 'position'
Project.register();
