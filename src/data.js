// Family Chart data format:
// - Each person has an id, data object, and rels object.
// - rels can include spouses, parents, and children arrays.
// - Keep ids stable once published where possible.
// - For privacy, avoid exact birth dates or sensitive details if hosting publicly.
//
// Current model:
// - Ameziane married Djemila.
// - Ameziane's parents are Ali and Drifa.
// - Ameziane has three sisters: Nouara, Louisa and Baya.
// - Ali has two brothers: Mouloud and Ahcen, and two sisters: Aldja and Adada.
// - Ahcen has a son called Khaman.
// - Djemila's parents are Mohand Tahar and Taous.
// - Djemila has four sisters: Mimi, Faroja, Khalija and Khoukha.
// - Djemila has two brothers: Judi and Malek.
// - Taous has siblings: Salah, Abdelsalem, Mouloud, Ourardia, Smail, Heshmi, Najid, Zouina and Hocine.
// - Ourardia married Meziane.

export const PEOPLE = {
  // Anchor / current generation placeholder
  me: person('me', 'Me', '', 'U', 'You / edit me', 'anchor', 'Placeholder. Rename or remove before publishing.'),
  mother_unknown: person('mother_unknown', 'Mother', 'tbc', 'F', 'Mother', 'anchor', 'Placeholder only.'),
  mustapha: person('mustapha', 'Mustapha', '', 'M', 'Father', 'anchor', 'Child of Ameziane and Djemila.'),

  // Core grandparents
  ameziane: person('ameziane', 'Ameziane', '', 'M', 'Grandfather — father side', 'paternal-grandfather', 'Married Djemila.'),
  djemila: person('djemila', 'Djemila', '', 'F', 'Grandmother — father side', 'paternal-grandmother', 'Married Ameziane.'),

  // Ameziane branch
  ali: person('ali', 'Ali', '', 'M', 'Father of Ameziane', 'paternal-grandfather', 'Husband of Drifa. Brother of Mouloud, Ahcen, Aldja and Adada.'),
  drifa: person('drifa', 'Drifa', '', 'F', 'Mother of Ameziane', 'paternal-grandfather', 'Wife of Ali.'),
  nouara: person('nouara', 'Nouara', '', 'F', 'Sister of Ameziane', 'paternal-grandfather', ''),
  louisa: person('louisa', 'Louisa', '', 'F', 'Sister of Ameziane', 'paternal-grandfather', ''),
  baya: person('baya', 'Baya', '', 'F', 'Sister of Ameziane', 'paternal-grandfather', ''),

  // Ali's sibling generation
  ali_father_unknown: person('ali_father_unknown', 'Father of Ali', 'tbc', 'M', 'Ancestor — Ali sibling group', 'paternal-grandfather', 'Placeholder parent for Ali, Mouloud, Ahcen, Aldja and Adada.'),
  ali_mother_unknown: person('ali_mother_unknown', 'Mother of Ali', 'tbc', 'F', 'Ancestor — Ali sibling group', 'paternal-grandfather', 'Placeholder parent for Ali, Mouloud, Ahcen, Aldja and Adada.'),
  mouloud_brother_of_ali: person('mouloud_brother_of_ali', 'Mouloud', '', 'M', 'Brother of Ali', 'paternal-grandfather', ''),
  ahcen: person('ahcen', 'Ahcen', '', 'M', 'Brother of Ali', 'paternal-grandfather', 'Father of Khaman.'),
  aldja: person('aldja', 'Aldja', '', 'F', 'Sister of Ali', 'paternal-grandfather', ''),
  adada: person('adada', 'Adada', '', 'F', 'Sister of Ali', 'paternal-grandfather', ''),
  khaman: person('khaman', 'Khaman', '', 'M', 'Son of Ahcen', 'paternal-grandfather', ''),

  // Djemila branch
  taous: person('taous', 'Taous', '', 'F', 'Mother of Djemila', 'paternal-grandmother', 'Daughter in the Taous sibling group.'),
  mohand_tahar: person('mohand_tahar', 'Mohand Tahar', '', 'M', 'Father of Djemila', 'paternal-grandmother', ''),
  mimi: person('mimi', 'Mimi', '', 'F', 'Sister of Djemila', 'paternal-grandmother', ''),
  faroja: person('faroja', 'Faroja', '', 'F', 'Sister of Djemila', 'paternal-grandmother', ''),
  khalija: person('khalija', 'Khalija', '', 'F', 'Sister of Djemila', 'paternal-grandmother', ''),
  khoukha: person('khoukha', 'Khoukha', '', 'F', 'Sister of Djemila', 'paternal-grandmother', ''),
  judi: person('judi', 'Judi', '', 'M', 'Brother of Djemila', 'paternal-grandmother', ''),
  malek: person('malek', 'Malek', '', 'M', 'Brother of Djemila', 'paternal-grandmother', ''),

  // Taous sibling generation
  taous_father_unknown: person('taous_father_unknown', 'Father of Taous', 'tbc', 'M', 'Ancestor — Taous sibling group', 'taous-line', 'Placeholder parent for Taous and her siblings.'),
  taous_mother_unknown: person('taous_mother_unknown', 'Mother of Taous', 'tbc', 'F', 'Ancestor — Taous sibling group', 'taous-line', 'Placeholder parent for Taous and her siblings.'),

  salah: person('salah', 'Salah', '', 'M', 'Oldest brother of Taous', 'taous-line', 'Oldest brother of Taous.'),
  abdelsalem: person('abdelsalem', 'Abdelsalem', '', 'M', 'Brother of Taous', 'taous-line', ''),
  mouloud_brother_of_taous: person('mouloud_brother_of_taous', 'Mouloud', '', 'M', 'Brother of Taous', 'taous-line', 'Highest ranked in the army. Died during the revolution.'),
  ourardia: person('ourardia', 'Ourardia', '', 'F', 'Sister of Taous', 'taous-line', 'Married Meziane.'),
  meziane_husband_of_ourardia: person('meziane_husband_of_ourardia', 'Meziane', '', 'M', 'Husband of Ourardia', 'taous-line', 'Had medals from the Indochina War and World War II.'),
  smail: person('smail', 'Smail', '', 'M', 'Brother of Taous', 'taous-line', ''),
  heshmi: person('heshmi', 'Heshmi', '', 'M', 'Brother of Taous', 'taous-line', 'Lives in France. Born in 1933.'),
  najid: person('najid', 'Najid', '', 'M', 'Brother of Taous', 'taous-line', 'Died during the revolution.'),
  zouina: person('zouina', 'Zouina', '', 'F', 'Sister of Taous', 'taous-line', ''),
  hocine: person('hocine', 'Hocine', '', 'M', 'Youngest brother of Taous', 'taous-line', 'Youngest brother of Taous.'),
};

// Relationships. Keep these reciprocal where possible:
// if A has child B, B should have parents [A, spouse] where both parents are known.

linkSpouses('mustapha', 'mother_unknown');
linkChildren(['mustapha', 'mother_unknown'], ['me']);

linkSpouses('ameziane', 'djemila');
linkChildren(['ameziane', 'djemila'], ['mustapha']);

// Ameziane and his sisters
linkSpouses('ali', 'drifa');
linkChildren(['ali', 'drifa'], ['ameziane', 'nouara', 'louisa', 'baya']);

// Ali and his siblings
linkSpouses('ali_father_unknown', 'ali_mother_unknown');
linkChildren(
  ['ali_father_unknown', 'ali_mother_unknown'],
  ['ali', 'mouloud_brother_of_ali', 'ahcen', 'aldja', 'adada']
);

// Ahcen's known child
linkChildren(['ahcen'], ['khaman']);

// Djemila and her siblings
linkSpouses('mohand_tahar', 'taous');
linkChildren(
  ['mohand_tahar', 'taous'],
  ['djemila', 'mimi', 'faroja', 'khalija', 'khoukha', 'judi', 'malek']
);

// Taous and her siblings
linkSpouses('taous_father_unknown', 'taous_mother_unknown');
linkChildren(
  ['taous_father_unknown', 'taous_mother_unknown'],
  [
    'salah',
    'abdelsalem',
    'mouloud_brother_of_taous',
    'ourardia',
    'smail',
    'heshmi',
    'najid',
    'taous',
    'zouina',
    'hocine',
  ]
);

// Ourardia marriage
linkSpouses('ourardia', 'meziane_husband_of_ourardia');

export const familyData = Object.values(PEOPLE);

export function getFamilyData(filter = 'all') {
  if (filter === 'all') return familyData;

  const alwaysKeep = new Set([
    'me',
    'mustapha',
    'mother_unknown',
    'ameziane',
    'djemila',
    'ali',
    'drifa',
    'mohand_tahar',
    'taous',
  ]);

  const keptIds = new Set(
    familyData
      .filter((p) => p.data.branch === filter || alwaysKeep.has(p.id))
      .map((p) => p.id)
  );

  // Return a safe filtered copy with broken relationship ids removed.
  return familyData
    .filter((p) => keptIds.has(p.id))
    .map((p) => ({
      ...p,
      rels: Object.fromEntries(
        Object.entries(p.rels || {}).map(([key, ids]) => [
          key,
          ids.filter((id) => keptIds.has(id)),
        ])
      ),
    }));
}

function person(id, firstName, lastName = '', gender = 'U', relationship = '', branch = '', notes = '') {
  return {
    id,
    data: {
      'first name': firstName,
      'last name': lastName,
      gender,
      relationship,
      branch,
      notes,
    },
    rels: {},
  };
}

function linkSpouses(a, b) {
  addRel(a, 'spouses', b);
  addRel(b, 'spouses', a);
}

function linkChildren(parentIds, childIds) {
  for (const parentId of parentIds) {
    for (const childId of childIds) addRel(parentId, 'children', childId);
  }

  for (const childId of childIds) {
    PEOPLE[childId].rels.parents = parentIds;
  }
}

function addRel(id, rel, targetId) {
  if (!PEOPLE[id]) throw new Error(`Unknown person id: ${id}`);
  if (!PEOPLE[targetId]) throw new Error(`Unknown target id: ${targetId}`);

  if (!PEOPLE[id].rels[rel]) PEOPLE[id].rels[rel] = [];
  if (!PEOPLE[id].rels[rel].includes(targetId)) PEOPLE[id].rels[rel].push(targetId);
}
