import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'QR Generator';

    // Settings QR
    public qrSize = 256;
    public qrCorrectLevel = 'M';
    public qrData: string = null;

    public qrText: string = null;

    public qrURL: string = null;

    public qrPhoneNumber: string = null;

    public qrSmsPhoneNumber: string = null;
    public qrSmsMessage: string = null;

    public qrContactName = '';
    public qrContactOrganization = '';
    public qrContactTitle = '';
    public qrContactEmail = '';
    public qrContactPhone = '';
    public qrContactStreet = '';
    public qrContactCity = '';
    public qrContactCountry = '';

    public qrEmailAddress = '';
    public qrEmailSubject = '';
    public qrEmailMessage = '';

    public Types = {
        TEXT: 'TEXT',
        URL: 'URL',
        CONTACT: 'CONTACT',
        PHONE: 'PHONE',
        EMAIL: 'EMAIL',
        SMS: 'SMS'
    };

    constructor() {
        this.qrData = '';
    }

    ngOnInit(): void {
        this.qrText = ' ';
        this.qrSize = 256;
        this.qrCorrectLevel = 'M';
    }

    generate(type) {
        switch (type) {
            case this.Types.TEXT:
                this.qrData = this.qrText;
                break;
            case this.Types.URL:
                this.qrData = 'http:' + this.qrURL;
                break;
            case this.Types.CONTACT:
                this.qrData = 'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'N:' + this.qrContactName + ';\n' +
                    'FN:' + this.qrContactName + '\n' +
                    'ORG:' + this.qrContactOrganization + '\n' +
                    'TITLE:' + this.qrContactTitle + '\n' +
                    // 'PHOTO;VALUE=URI;TYPE=GIF:http://www.example.com/dir_photos/my_photo.gif\n' +
                    // 'TEL;TYPE=WORK,VOICE:(111) 555-1212\n' +
                    'TEL;TYPE=HOME,VOICE:' + this.qrContactPhone + '\n' +
                    // 'ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America\n' +
                    // 'LABEL;TYPE=WORK,PREF:100 Waters Edge\\nBaytown\\, LA 30314\\nUnited States of America\n' +
                    'ADR;TYPE=HOME:;;' + this.qrContactStreet + ';' + this.qrContactCity + ';;;' + this.qrContactCountry + '\n' +
                    // 'LABEL;TYPE=HOME:42 Plantation St.\\nBaytown\\, LA 30314\\nUnited States of America\n' +
                    'EMAIL:' + this.qrContactEmail + '\n' +
                    // 'REV:2008-04-24T19:52:43Z\n' +
                    'END:VCARD';
                break;
            case this.Types.PHONE:
                this.qrData = 'tel:' + this.qrPhoneNumber;
                break;
            case this.Types.EMAIL:
                this.qrData = 'MATMSG:TO:' + this.qrEmailAddress + ';SUB:' + this.qrEmailSubject + ';BODY:' + this.qrEmailMessage + ';;';
                break;
            case this.Types.SMS:
                this.qrData = 'SMSTO:' + this.qrSmsPhoneNumber + ':' + this.qrSmsMessage;
                break;
        }
    }
}
