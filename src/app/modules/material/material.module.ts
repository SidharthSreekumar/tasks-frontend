import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

export const importedModules = [MatMenuModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importedModules],
  exports: [...importedModules],
})
export class MaterialModule {}
