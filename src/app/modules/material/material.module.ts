import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export const importedModules = [MatMenuModule, MatIconModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importedModules],
  exports: [...importedModules],
})
export class MaterialModule {}
