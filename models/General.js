var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Ajustes generales
 * ==========
 */

var General = new keystone.List('General', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

General.add({
	title: { type: String, required: true },
	HeroText: { type: String},
	HeroSubtitle: { type: String},

	/* SERVICIOS */ 

	service_00: { type: String, label: "Service 1" },
	image_SERVICE_00: { type: Types.CloudinaryImage, label: "Img service 1"},

	service_01: { type: String, label: "Service 2" },
	image_SERVICE_01: { type: Types.CloudinaryImage, label: "Img service 2"},

	service_02: { type: String, label: "Service 3" },
	image_SERVICE_02: { type: Types.CloudinaryImage, label: "Img service 3"},

	service_03: { type: String, label: "Service 4" },
	image_SERVICE_03: { type: Types.CloudinaryImage, label: "Img service 4"},

	service_04: { type: String, label: "Service 5" },
	image_SERVICE_04: { type: Types.CloudinaryImage, label: "Img service 5"},

	service_05: { type: String, label: "Service 6" },
	image_SERVICE_05: { type: Types.CloudinaryImage, label: "Img service 6"},
	/* Pill */

	Pill: { type: String},

	/* TITLE II */

	HeroText_II: {type: Types.Html, wysiwyg: false},
	HeroSubtitle_II: { type: String},

	/* DESCRIPTION */

	Description: {type: Types.Html, wysiwyg: false},

	/* PROJECT IMGS */
	image_projects_ABOUT_01: { type: Types.CloudinaryImage , label: "Back to projects IMG left"},
	image_projects_ABOUT_03: { type: Types.CloudinaryImage , label: "Back to projects IMG Center"},
	image_projects_ABOUT_02: { type: Types.CloudinaryImage , label: "Back to projects IMG right"},
	buttonText_ABOUT: { type: String , label: "Button Text", default: 'View all projects'},

	/* PROJECT IMGS */
	CONTACT_PHONE_LABEL: { type: String , label: "Phone Label", default: 'Phone'},
	CONTACT_PHONE_FILL: { type: String , label: "Phone Number", default: '619 920 332'},

	CONTACT_Email_LABEL: { type: String , label: "Email Label", default: 'E-Mail'},
	CONTACT_Email_FILL: { type: String , label: "Email", default: 'lucas@ortizestefanell.com'},
	
	CONTACT_Instagram_LABEL: { type: String , label: "Instagram Label", default: 'Instagram'},
	CONTACT_Instagram_FILL: { type: String , label: "Instagram", default: '@BigSeis'},
	
	CONTACT_Pinterest_LABEL: { type: String , label: "Pinterest Label", default: 'Pinterest'},
	CONTACT_Pinterest_FILL: { type: String , label: "Pinterest", default: 'Instinto Salvaje'},

	CONTACT_Location_LABEL: { type: String , label: "Location Label", default: 'Location'},
	CONTACT_Location_FILL: { type: String , label: "Location", default: 'Madrid, Spain'},

	/* AJUSTES WORKS */
	WORKS_BORDER_RADIUS: { type: Number , label: "Radio esquina proyectos px", default: '6'},
	video_WORKS: { type: String , label: "Video Home", default:'376947142'},
	image_WORKS: { type: Types.CloudinaryImage , label: "Foto Home"},


	/* AJUSTES ABOUT */
	video_ABOUT: { type: String , label: "Video About", default:'376947142'},
	image_ABOUT: { type: Types.CloudinaryImage , label: "Foto About"},

	image_TEAM: { type: Types.CloudinaryImage , label: "Foto Team"},



});

General.defaultColumns = 'title, state|20%, image|20%';
General.register();

