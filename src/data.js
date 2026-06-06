// Family Chart data format:
// - Each person has an id, data object, and rels object.
// - rels can include spouses, parents, and children arrays.
// - Keep ids stable once you publish; edit display names in data.
// - For privacy, avoid exact birth dates or sensitive details if hosting publicly.

export const PEOPLE = {
  // Anchor / current generation placeholder
  me: person('me', 'Me', '', 'U', 'You / edit me', 'anchor', 'Placeholder. Rename or remove before publishing.'),
  mother_unknown: person('mother_unknown', 'Mother', 'tbc', 'F', 'Mother', 'anchor', 'Placeholder only.'),
  mustapha: person('mustapha', 'Mustapha', '', 'M', 'Father', 'anchor', 'From handwritten note.'),

  // Father’s father side: Ameziane branch
  ameziane: person('ameziane', 'Ameziane', '', 'M', 'Grandfather — father side', 'paternal-grandfather', 'Boxed in note.'),
  djemila: person('djemila', 'Djemila', '', 'F', 'Grandmother — mother side of father', 'paternal-grandmother', 'Boxed in note.'),

  kmamma: person('kmamma', "K’Mamma", '', 'F', 'Great-grandmother — father’s father side', 'paternal-grandfather', 'Spelling tbc.'),
  ahcen: person('ahcen', 'Ahcen', '', 'M', 'Great-grandfather — father’s father side', 'paternal-grandfather', 'Spelling tbc.'),
  baya: person('baya', 'Baya', '', 'F', 'Relative — father’s father side', 'paternal-grandfather', 'Spelling/relationship tbc.'),
  louisa: person('louisa', 'Louisa', '', 'F', 'Relative — father’s father side', 'paternal-grandfather', 'Spelling/relationship tbc.'),
  noura: person('noura', 'Noura', '', 'F', 'Relative — father’s father side', 'paternal-grandfather', 'Spelling/relationship tbc.'),

  // Possible siblings/relatives of Ahcen from top line in first sketch
  ali: person('ali', 'Ali', '', 'M', 'Relative — father’s father side', 'paternal-grandfather', 'Relationship tbc.'),
  mouloud: person('mouloud', 'Mouloud', '', 'M', 'Relative — father’s father side', 'paternal-grandfather', 'Relationship tbc.'),
  akli: person('akli', 'Akli', '', 'M', 'Relative — father’s father side', 'paternal-grandfather', 'Spelling/relationship tbc.'),
  adaad: person('adaad', 'Adaad', '', 'M', 'Relative — father’s father side', 'paternal-grandfather', 'Spelling/relationship tbc.'),
  paternal_ancestor_1: person('paternal_ancestor_1', 'Paternal ancestor', 'tbc', 'M', 'Ancestor — father’s father side', 'paternal-grandfather', 'Placeholder parent for Ahcen/Ali/Mouloud/Akli/Adaad.'),
  paternal_ancestor_2: person('paternal_ancestor_2', 'Paternal ancestor', 'tbc', 'F', 'Ancestor — father’s father side', 'paternal-grandfather', 'Placeholder parent for Ahcen/Ali/Mouloud/Akli/Adaad.'),

  // Father’s mother side: Djemila branch
  taous: person('taous', 'Taous', '', 'F', 'Great-grandmother — father’s mother side', 'paternal-grandmother', 'Spelling tbc.'),
  mohamed_tahar: person('mohamed_tahar', 'Mohamed Tahar', '', 'M', 'Great-grandfather — father’s mother side', 'paternal-grandmother', 'Spelling tbc.'),
  khaoucha: person('khaoucha', "K’haoucha", '', 'F', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
  mimi: person('mimi', 'Mimi', '', 'F', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
  jeddi: person('jeddi', 'Jeddi', '', 'M', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
  fadogia: person('fadogia', 'Fadogia', '', 'F', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
  khadija: person('khadija', 'Khadija', '', 'F', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
  mhirak: person('mhirak', 'Mhirak', '', 'F', 'Relative — father’s mother side', 'paternal-grandmother', 'Spelling/relationship tbc.'),
};

// Relationships. Keep these reciprocal where possible: if A has child B, B should have parents [A, spouse].
linkSpouses('mustapha', 'mother_unknown');
linkChildren(['mustapha', 'mother_unknown'], ['me']);

linkSpouses('ameziane', 'djemila');
linkChildren(['ameziane', 'djemila'], ['mustapha']);

linkSpouses('ahcen', 'kmamma');
linkChildren(['ahcen', 'kmamma'], ['baya', 'louisa', 'ameziane', 'noura']);

linkSpouses('paternal_ancestor_1', 'paternal_ancestor_2');
linkChildren(['paternal_ancestor_1', 'paternal_ancestor_2'], ['ahcen', 'ali', 'mouloud', 'akli', 'adaad']);

linkSpouses('mohamed_tahar', 'taous');
linkChildren(['mohamed_tahar', 'taous'], ['khaoucha', 'mimi', 'djemila', 'jeddi', 'fadogia', 'khadija', 'mhirak']);

export const familyData = Object.values(PEOPLE);

export function getFamilyData(filter = 'all') {
  if (filter === 'all') return familyData;

  const alwaysKeep = new Set(['me', 'mustapha', 'mother_unknown', 'ameziane', 'djemila']);
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
        Object.entries(p.rels || {}).map(([key, ids]) => [key, ids.filter((id) => keptIds.has(id))])
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
  if (!PEOPLE[id].rels[rel]) PEOPLE[id].rels[rel] = [];
  if (!PEOPLE[id].rels[rel].includes(targetId)) PEOPLE[id].rels[rel].push(targetId);
}
