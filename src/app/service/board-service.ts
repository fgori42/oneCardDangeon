import { Injectable, signal, computed } from '@angular/core';
import { Hero } from '../model/hero';
import { TailState, TailContent } from '../model/tail-enums';

@Injectable({ providedIn: 'root' })
export class BoardService {
    private hoveredCell = signal<{ x: number, y: number, content: TailContent } | null>(null);
    private _hero = signal<Hero | null>(null);

    movementRange = computed(() => {
        const cell = this.hoveredCell();
        const hero = this._hero();
        if (!cell || cell.content !== TailContent.hero || !hero) return new Set<string>();

        return this.calculateRange(cell.x, cell.y, hero.power);
    });

  attackRange = computed(() => {
        const cell = this.hoveredCell();
        const hero = this._hero();
        if (!cell || cell.content !== TailContent.hero || !hero) return new Set<string>();

        return this.calculateRange(cell.x, cell.y, hero.reach);
    });

    setHovered(x: number, y: number, content: TailContent): void {
        this.hoveredCell.set({ x, y, content });
    }
    clearHovered(): void {
        this.hoveredCell.set(null);
    }
    setHero(hero: Hero): void {
        this._hero.set(hero);
    }

    private calculateRange(cx: number, cy: number, range: number): Set<string> {
    const cells = new Set<string>();
    for (let i = -range; i <= range; i++) {
      for (let j = -range; j <= range; j++) {
        if (Math.abs(i) + Math.abs(j) <= range && !(i === 0 && j === 0)) {
          cells.add(`${cx + i},${cy + j}`);
        }
      }
    }
    return cells;
  }
}
