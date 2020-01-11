import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AlertService {
    public constructor(
        private _snackBar: MatSnackBar,
    ) { }

    public openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}