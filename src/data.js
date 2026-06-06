// Family Chart data format:
// - Each person has an id, data object, and rels object.
// - Family Chart supports parents, spouses, and children.
// - There is no placeholder person in this file.
// - Where a sibling group has no known parent, the sibling information is stored in notes for now.
// - Keep ids stable once published; change display names in data fields.

export const PEOPLE = {
  // Core line
  mez: person(
    'mez',
    'Mez',
    '',
    'M',
    'Child of Mustapha',
    'core',
    '',
    '',
    '',
    ''
  ),

  ilyes: person(
    'ilyes',
    'Ilyes',
    '',
    'M',
    'Child of Mustapha',
    'core',
    '',
    '',
    '',
    ''
  ),

  mustapha: person(
    'mustapha',
    'Mustapha',
    'Benmaamar',
    'M',
    'Father of Mez and Ilyes',
    'core',
    'Born 12/12/1957',
    '',
    '',
    'Child of Ameziane and Djemila.'
  ),

  // Ameziane / Djemila marriage
  ameziane: person(
    'ameziane',
    'Ameziane',
    '',
    'M',
    'Father of Mustapha',
    'ameziane-line',
    'Born 8 February 1932 · died circa 1959',
    'Aigachen (sp?)',
    'Political Commissar with FLN',
    'Spouse of Djemila. Child of Ali and Drifa.'
  ),

  djemila: person(
    'djemila',
    'Djemila',
    '',
    'F',
    'Mother of Mustapha',
    'djemila-line',
    'Born 1940',
    'Lemcella',
    '',
    'Spouse of Ameziane. Child of Mohand Tahar Ziane and Taous.'
  ),

  // Ali and Drifa branch
  ali: person(
    'ali',
    'Ali',
    '',
    'M',
    'Father of Ameziane',
    'ameziane-line',
    'Died circa 1944',
    'Aigachen (sp?)',
    '',
    'Spouse of Drifa. Child of Kaci Benmaamar. Siblings: Mouloud, Ahcen, Aldja and Adada.'
  ),

  drifa: person(
    'drifa',
    'Drifa',
    '',
    'F',
    'Mother of Ameziane',
    'ameziane-line',
    'Died circa 2020',
    '',
    '',
    'Spouse of Ali. Children: Ameziane, Nouara, Louisa and Baya.'
  ),

  nouara: person(
    'nouara',
    'Nouara',
    '',
    'F',
    'Sister of Ameziane',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Ali and Drifa.'
  ),

  louisa: person(
    'louisa',
    'Louisa',
    '',
    'F',
    'Sister of Ameziane',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Ali and Drifa.'
  ),

  baya: person(
    'baya',
    'Baya',
    '',
    'F',
    'Sister of Ameziane',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Ali and Drifa.'
  ),

  // Kaci / Ali sibling group
  kaci_benmaamar: person(
    'kaci_benmaamar',
    'Kaci',
    'Benmaamar',
    'M',
    'Father of Ali',
    'ameziane-line',
    '',
    '',
    '',
    'Children: Ali, Mouloud, Ahcen, Aldja and Adada.'
  ),

  mouloud_brother_of_ali: person(
    'mouloud_brother_of_ali',
    'Mouloud',
    '',
    'M',
    'Brother of Ali',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Kaci Benmaamar.'
  ),

  ahcen: person(
    'ahcen',
    'Ahcen',
    '',
    'M',
    'Brother of Ali',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Kaci Benmaamar. Father of Khaman.'
  ),

  khaman: person(
    'khaman',
    'Khaman',
    '',
    'M',
    'Son of Ahcen',
    'ameziane-line',
    '',
    '',
    '',
    ''
  ),

  aldja: person(
    'aldja',
    'Aldja',
    '',
    'F',
    'Sister of Ali',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Kaci Benmaamar.'
  ),

  adada: person(
    'adada',
    'Adada',
    '',
    'F',
    'Sister of Ali',
    'ameziane-line',
    '',
    '',
    '',
    'Child of Kaci Benmaamar.'
  ),

  // Mohand Tahar and Taous branch
  mohand_tahar_ziane: person(
    'mohand_tahar_ziane',
    'Mohand Tahar',
    'Ziane',
    'M',
    'Father of Djemila',
    'djemila-line',
    '',
    '',
    '',
    'Spouse of Taous. Children: Djemila, Mimi, Faroja, Khalija, Khoukha, Judi and Malek.'
  ),

  taous: person(
    'taous',
    'Taous',
    '',
    'F',
    'Mother of Djemila',
    'taous-line',
    '',
    '',
    '',
    'Spouse of Mohand Tahar Ziane. Children: Djemila, Mimi, Faroja, Khalija, Khoukha, Judi and Malek. Siblings: Salah, Abdelsalem, Mouloud, Ourardia, Smail, Heshmi, Najid, Zouina and Hocine.'
  ),

  mimi_ziane: person(
    'mimi_ziane',
    'Mimi',
    'Ziane',
    'F',
    'Sister of Djemila',
    'djemila-line',
    'Born circa 1958',
    '',
    '',
    'Spouse of Sadik. Child of Mohand Tahar Ziane and Taous.'
  ),

  sadik: person(
    'sadik',
    'Sadik',
    '',
    'M',
    'Spouse of Mimi Ziane',
    'djemila-line',
    '',
    '',
    '',
    ''
  ),

  faroja_ziane: person(
    'faroja_ziane',
    'Faroja',
    'Ziane',
    'F',
    'Sister of Djemila',
    'djemila-line',
    '',
    '',
    '',
    'Spouse of Aomar. Child of Mohand Tahar Ziane and Taous.'
  ),

  aomar: person(
    'aomar',
    'Aomar',
    '',
    'M',
    'Spouse of Faroja Ziane',
    'djemila-line',
    '',
    '',
    '',
    ''
  ),

  khalija_ziane: person(
    'khalija_ziane',
    'Khalija',
    'Ziane',
    'F',
    'Sister of Djemila',
    'djemila-line',
    '',
    '',
    '',
    'Child of Mohand Tahar Ziane and Taous.'
  ),

  khoukha: person(
    'khoukha',
    'Khoukha',
    '',
    'F',
    'Sister of Djemila',
    'djemila-line',
    '',
    '',
    '',
    'Spouse of Mouloud. Child of Mohand Tahar Ziane and Taous.'
  ),

  mouloud_spouse_of_khoukha: person(
    'mouloud_spouse_of_khoukha',
    'Mouloud',
    '',
    'M',
    'Spouse of Khoukha',
    'djemila-line',
    '',
    '',
    '',
    ''
  ),

  judi: person(
    'judi',
    'Judi',
    '',
    'M',
    'Brother of Djemila',
    'djemila-line',
    'Born circa 1949',
    '',
    '',
    'Spouse of Zoulikha. Child of Mohand Tahar Ziane and Taous.'
  ),

  zoulikha: person(
    'zoulikha',
    'Zoulikha',
    '',
    'F',
    'Spouse of Judi',
    'djemila-line',
    '',
    '',
    '',
    ''
  ),

  malek: person(
    'malek',
    'Malek',
    '',
    'M',
    'Brother of Djemila',
    'djemila-line',
    'Born circa 1956',
    '',
    '',
    'Spouse of Nora. Child of Mohand Tahar Ziane and Taous.'
  ),

  nora: person(
    'nora',
    'Nora',
    '',
    'F',
    'Spouse of Malek',
    'djemila-line',
    '',
    '',
    '',
    ''
  ),

  // Taous sibling group.
  // These are known people, but without a known parent they cannot yet be structurally linked as siblings without adding a placeholder.
  salah: person(
    'salah',
    'Salah',
    '',
    'M',
    'Oldest brother of Taous',
    'taous-line',
    '',
    '',
    '',
    ''
  ),

  abdelsalem: person(
    'abdelsalem',
    'Abdelsalem',
    '',
    'M',
    'Brother of Taous',
    'taous-line',
    '',
    '',
    '',
    ''
  ),

  mouloud_brother_of_taous: person(
    'mouloud_brother_of_taous',
    'Mouloud',
    '',
    'M',
    'Brother of Taous',
    'taous-line',
    '',
    '',
    'Army',
    'Highest ranked in the army. Died during the revolution.'
  ),

  ourardia: person(
    'ourardia',
    'Ourardia',
    '',
    'F',
    'Sister of Taous',
    'taous-line',
    '',
    '',
    '',
    'Spouse of Meziane.'
  ),

  meziane_husband_of_ourardia: person(
    'meziane_husband_of_ourardia',
    'Meziane',
    '',
    'M',
    'Spouse of Ourardia',
    'taous-line',
    '',
    '',
    'Military service',
    'Had medals from the Indochina War and World War II.'
  ),

  smail: person(
    'smail',
    'Smail',
    '',
    'M',
    'Brother of Taous',
    'taous-line',
    '',
    '',
    '',
    ''
  ),

  heshmi: person(
    'heshmi',
    'Heshmi',
    '',
    'M',
    'Brother of Taous',
    'taous-line',
    'Born 1933',
    'France',
    '',
    'Lives in France.'
  ),

  najid: person(
    'najid',
    'Najid',
    '',
    'M',
    'Brother of Taous',
    'taous-line',
    '',
    '',
    '',
    'Died during the revolution.'
  ),

  zouina: person(
    'zouina',
    'Zouina',
    '',
    'F',
    'Sister of Taous',
    'taous-line',
    '',
    '',
    '',
    ''
  ),

  hocine: person(
    'hocine',
    'Hocine',
    '',
    'M',
    'Youngest brother of Taous',
    'taous-line',
    '',
    '',
    '',
    ''
  ),
};

// Core relationships
linkChildren(['mustapha'], ['mez', 'ilyes']);

linkSpouses('ameziane', 'djemila');
linkChildren(['ameziane', 'djemila'], ['mustapha']);

// Ameziane branch
linkSpouses('ali', 'drifa');
linkChildren(['ali', 'drifa'], ['ameziane', 'nouara', 'louisa', 'baya']);

linkChildren(
  ['kaci_benmaamar'],
  ['ali', 'mouloud_brother_of_ali', 'ahcen', 'aldja', 'adada']
);

linkChildren(['ahcen'], ['khaman']);

// Djemila / Ziane branch
linkSpouses('mohand_tahar_ziane', 'taous');
linkChildren(
  ['mohand_tahar_ziane', 'taous'],
  ['djemila', 'mimi_ziane', 'faroja_ziane', 'khalija_ziane', 'khoukha', 'judi', 'malek']
);

linkSpouses('mimi_ziane', 'sadik');
linkSpouses('faroja_ziane', 'aomar');
linkSpouses('khoukha', 'mouloud_spouse_of_khoukha');
linkSpouses('judi', 'zoulikha');
linkSpouses('malek', 'nora');

// Taous sibling known marriage
linkSpouses('ourardia', 'meziane_husband_of_ourardia');

export const familyData = Object.values(PEOPLE);

export function getFamilyData(filter = 'all') {
  if (filter === 'all') return familyData;

  const alwaysKeep = new Set([
    'mez',
    'ilyes',
    'mustapha',
    'ameziane',
    'djemila',
    'ali',
    'drifa',
    'mohand_tahar_ziane',
    'taous',
  ]);

  const keptIds = new Set(
    familyData
      .filter((p) => p.data.branch === filter || alwaysKeep.has(p.id))
      .map((p) => p.id)
  );

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

function person(
  id,
  firstName,
  lastName = '',
  gender = 'M',
  relationship = '',
  branch = '',
  years = '',
  location = '',
  occupation = '',
  notes = ''
) {
  return {
    id,
    data: {
      'first name': firstName,
      'last name': lastName,
      gender,
      relationship,
      branch,
      years,
      location,
      occupation,
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
