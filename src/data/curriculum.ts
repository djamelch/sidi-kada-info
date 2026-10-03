export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  shortDesc: string;
  slug: string;
  term: 1 | 2 | 3;
  status: 'available' | 'in_progress' | 'planned';
  estimatedMinutes?: number;
  hasSimulator?: boolean;
}

export interface Domain {
  id: string;
  domainNumber: number;
  title: string;
  color: string;
  icon: string;
  description: string;
  units: Unit[];
}

export interface Stream {
  id: 'tcst' | 'tcl';
  name: string;
  shortName: string;
  subtitle: string;
  weeklyHours: number;
  classesCount: string;
  assignedClasses: string[];
  coefficient: number;
  colorScheme: {
    primary: string;
    bgBadge: string;
    textBadge: string;
    border: string;
    hoverBorder: string;
  };
  domains: Domain[];
}

export const ACADEMIC_INFO = {
  platformName: 'معرفة تك',
  platformNameEn: 'Maerifa Tech',
  highSchool: 'ثانوية الأمير عبد القادر',
  city: 'سيدي قادة – ولاية معسكر',
  subject: 'المعلوماتية (التعليم الثانوي)',
  teacher: 'الأستاذ: شلابي جمال الدين',
  schoolYear: '2026 - 2027',
  siteUrl: 'https://maerifatech.pages.dev'
};

export const STREAMS_DATA: Record<'tcst' | 'tcl', Stream> = {
  tcst: {
    id: 'tcst',
    name: 'جذع مشترك علوم وتكنولوجيا',
    shortName: 'ج.م.ع.ت (علمي)',
    subtitle: '1 ساعة أسبوعياً بالحجرة العادية • المعامل: 2',
    weeklyHours: 1,
    classesCount: '5 أقسام',
    assignedClasses: ['1ع5', '1ع6', '1ع7', '1ع8', '1ع9'],
    coefficient: 2,
    colorScheme: {
      primary: 'blue',
      bgBadge: 'bg-blue-100 text-blue-800 border-blue-200',
      textBadge: 'text-blue-700',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-500'
    },
    domains: [
      {
        id: 'tcst-d1',
        domainNumber: 1,
        title: 'المجال 01: بيئة التعامل مع الحاسوب',
        color: 'from-blue-600 to-cyan-600',
        icon: '💻',
        description: 'البنية المادية، المعالج والذاكرة، نظام التشغيل، وأمن الشبكات المحلية.',
        units: [
          {
            id: 'tcst-m1-u1',
            unitNumber: 1,
            title: 'تقنية المعلومات',
            shortDesc: 'البيانات والمعلومات، التقنية، المعلوماتية، مجالات تقنية المعلومات، وتكنولوجيا الإعلام والاتصال (TIC).',
            slug: '/tcst/m1-u1',
            term: 1,
            status: 'available',
            estimatedMinutes: 5,
            hasSimulator: false
          },
          {
            id: 'tcst-m1-u2',
            unitNumber: 2,
            title: 'تجميع الحاسوب والعتاد',
            shortDesc: 'المكونات الأساسية للوحدة المركزية، وحدات قياس الذاكرة والتركيب الداخلي.',
            slug: '/tcst/m1-u2',
            term: 1,
            status: 'in_progress',
            estimatedMinutes: 7,
            hasSimulator: true
          },
          {
            id: 'tcst-m1-u3',
            unitNumber: 3,
            title: 'نظام التشغيل والإقلاع',
            shortDesc: 'وظائف نظام التشغيل، إعدادات BIOS/UEFI وإدارة الملفات والأقراص.',
            slug: '/tcst/m1-u3',
            term: 1,
            status: 'planned',
            estimatedMinutes: 6
          },
          {
            id: 'tcst-m1-u4',
            unitNumber: 4,
            title: 'حماية الحاسوب وأمن البيانات',
            shortDesc: 'مخاطر البرمجيات الخبيثة، جدار الحماية، والنسخ الاحتياطي وتجميد النظام.',
            slug: '/tcst/m1-u4',
            term: 1,
            status: 'planned',
            estimatedMinutes: 5
          },
          {
            id: 'tcst-m1-u5',
            unitNumber: 5,
            title: 'الشبكة المحلية وتشارك الموارد',
            shortDesc: 'مكونات الشبكة، أصنافها وطوبولوجياتها، ومشاركة الملفات والطابعات.',
            slug: '/tcst/m1-u5',
            term: 1,
            status: 'planned',
            estimatedMinutes: 7
          }
        ]
      },
      {
        id: 'tcst-d2',
        domainNumber: 2,
        title: 'المجال 02: المخططات الانسيابية والخوارزميات',
        color: 'from-amber-500 to-orange-600',
        icon: '⚡',
        description: 'التفكير المنطقي، التمثيل البياني، وبناء الخوارزميات الشرطية والتكرارية.',
        units: [
          {
            id: 'tcst-m2-u1',
            unitNumber: 1,
            title: 'المخططات الانسيابية (المفاهيم والأشكال)',
            shortDesc: 'الأشكال الهندسية المعيارية، البنية التسلسلية التتابعية وحل المسائل الرياضية.',
            slug: '/tcst/m2-u1',
            term: 2,
            status: 'planned',
            estimatedMinutes: 8,
            hasSimulator: true
          },
          {
            id: 'tcst-m2-u2',
            unitNumber: 2,
            title: 'مدخل إلى الخوارزميات والهيكل البنائي',
            shortDesc: 'الترويسة، التصريحات، أنواع المتغيرات والثوابت وقواعد التسمية.',
            slug: '/tcst/m2-u2',
            term: 2,
            status: 'planned',
            estimatedMinutes: 6
          },
          {
            id: 'tcst-m2-u3',
            unitNumber: 3,
            title: 'التعليمات الأساسية (قراءة، إسناد، كتابة)',
            shortDesc: 'صياغة العمليات الحسابية وتتبع قيم المتغيرات خطوة بخطوة.',
            slug: '/tcst/m2-u3',
            term: 2,
            status: 'planned',
            estimatedMinutes: 7
          },
          {
            id: 'tcst-m2-u4',
            unitNumber: 4,
            title: 'التعليمات الشرطية (Si ... Alors ... Sinon)',
            shortDesc: 'اتخاذ القرارات، الشروط البسيطة والمركبة والمقارنات العددية.',
            slug: '/tcst/m2-u4',
            term: 2,
            status: 'planned',
            estimatedMinutes: 8
          },
          {
            id: 'tcst-m2-u5',
            unitNumber: 5,
            title: 'التعليمات التكرارية وجداول التتبع (Pour, TantQue)',
            shortDesc: 'العدادات والحلقات التكرارية وجدول تتبع المتغيرات الحي.',
            slug: '/tcst/m2-u5',
            term: 2,
            status: 'planned',
            estimatedMinutes: 9,
            hasSimulator: true
          }
        ]
      },
      {
        id: 'tcst-d3',
        domainNumber: 3,
        title: 'المجال 03: تقنيات الويب والتواصل',
        color: 'from-emerald-500 to-teal-600',
        icon: '🌐',
        description: 'بنية شبكة الويب العالمية، إنشاء وتنسيق صفحات HTML، وأدوات التواصل السحابي.',
        units: [
          {
            id: 'tcst-m3-u1',
            unitNumber: 1,
            title: 'المتصفحات ومحركات البحث المتقدمة',
            shortDesc: 'عناوين URL، بروتوكولات الويب وتقنيات استرجاع المعلومات بكفاءة.',
            slug: '/tcst/m3-u1',
            term: 3,
            status: 'planned',
            estimatedMinutes: 5
          },
          {
            id: 'tcst-m3-u2',
            unitNumber: 2,
            title: 'تصميم صفحات الويب بلغة HTML',
            shortDesc: 'الوسوم الأساسية، تنسيق النصوص، القوائم، وإدراج الوسائط والروابط.',
            slug: '/tcst/m3-u2',
            term: 3,
            status: 'planned',
            estimatedMinutes: 8,
            hasSimulator: true
          },
          {
            id: 'tcst-m3-u3',
            unitNumber: 3,
            title: 'البريد الإلكتروني وأدوات التواصل السحابي',
            shortDesc: 'المراسلات الرسمية، التخزين السحابي وقواعد الأمان الرقمي.',
            slug: '/tcst/m3-u3',
            term: 3,
            status: 'planned',
            estimatedMinutes: 5
          }
        ]
      },
      {
        id: 'tcst-d4',
        domainNumber: 4,
        title: 'المجال 04: المكتبية ومعالجة الوثائق',
        color: 'from-purple-500 to-indigo-600',
        icon: '📝',
        description: 'إعداد وتنسيق الوثائق المتقدمة، دمج المراسلات واستخراج الوثائق.',
        units: [
          {
            id: 'tcst-m4-u1',
            unitNumber: 1,
            title: 'معالجة النصوص المتقدمة Word ودمج المراسلات',
            shortDesc: 'أنماط العناوين، الجداول التلقائية، ودمج المراسلات لإصدار الكشوف والشهادات.',
            slug: '/tcst/m4-u1',
            term: 3,
            status: 'planned',
            estimatedMinutes: 7
          }
        ]
      }
    ]
  },
  tcl: {
    id: 'tcl',
    name: 'جذع مشترك آداب',
    shortName: 'ج.م.آ (أدبي)',
    subtitle: 'ساعتان أسبوعياً • المعامل: 1 • تركيز مكثف على المهارات المكتبية',
    weeklyHours: 2,
    classesCount: 'قسم واحد',
    assignedClasses: ['1آ5'],
    coefficient: 1,
    colorScheme: {
      primary: 'emerald',
      bgBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      textBadge: 'text-emerald-700',
      border: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-500'
    },
    domains: [
      {
        id: 'tcl-d1',
        domainNumber: 1,
        title: 'المجال 01: بيئة التعامل مع الحاسوب (مكيف)',
        color: 'from-blue-600 to-cyan-600',
        icon: '💻',
        description: 'العتاد المادي، نظام التشغيل، إدارة المجلدات وأمن البيانات البسيط.',
        units: [
          {
            id: 'tcl-m1-u1',
            unitNumber: 1,
            title: 'تقنية المعلومات',
            shortDesc: 'البيانات والمعلومات، التقنية، المعلوماتية، مجالات تقنية المعلومات، وتكنولوجيا الإعلام والاتصال (TIC).',
            slug: '/tcl/m1-u1',
            term: 1,
            status: 'available',
            estimatedMinutes: 5
          },
          {
            id: 'tcl-m1-u2',
            unitNumber: 2,
            title: 'تجميع الحاسوب والعتاد المادي',
            shortDesc: 'المكونات الخارجية والداخلية، وحدات قياس سعة التخزين والنصوص.',
            slug: '/tcl/m1-u2',
            term: 1,
            status: 'planned',
            estimatedMinutes: 6
          },
          {
            id: 'tcl-m1-u3',
            unitNumber: 3,
            title: 'نظام التشغيل وإدارة الملفات',
            shortDesc: 'سطح المكتب، النوافذ، تنظيم المجلدات الرقمية والبحث السريع.',
            slug: '/tcl/m1-u3',
            term: 1,
            status: 'planned',
            estimatedMinutes: 5
          },
          {
            id: 'tcl-m1-u4',
            unitNumber: 4,
            title: 'حماية البيانات والأمن الرقمي',
            shortDesc: 'كلمات المرور، الوقاية من الفيروسات، وحماية الخصوصية الشخصية.',
            slug: '/tcl/m1-u4',
            term: 1,
            status: 'planned',
            estimatedMinutes: 5
          },
          {
            id: 'tcl-m1-u5',
            unitNumber: 5,
            title: 'الشبكة المحلية ومشاركة الموارد',
            shortDesc: 'أصناف الشبكات، مشاركة الطابعات والملفات بين الأجهزة.',
            slug: '/tcl/m1-u5',
            term: 1,
            status: 'planned',
            estimatedMinutes: 6
          }
        ]
      },
      {
        id: 'tcl-d2',
        domainNumber: 2,
        title: 'المجال 02: المكتبية الموسعة (15 ساعة كاملة)',
        color: 'from-purple-600 to-pink-600',
        icon: '📊',
        description: 'التحكم الاحترافي في تحرير البحوث (Word)، الجداول والصيغ (Excel)، والعروض (PowerPoint).',
        units: [
          {
            id: 'tcl-m2-u1',
            unitNumber: 1,
            title: 'معالج النصوص Word (تحرير البحوث والتقارير)',
            shortDesc: 'تنسيق الفقرات، الفهارس التلقائية، الجداول، وإخراج المقالات والبحوث الأدبية.',
            slug: '/tcl/m2-u1',
            term: 2,
            status: 'planned',
            estimatedMinutes: 8
          },
          {
            id: 'tcl-m2-u2',
            unitNumber: 2,
            title: 'جداول البيانات والحساب Excel',
            shortDesc: 'الجداول، الحسابات التلقائية، الصيغ الرياضية والإحصائية والتمثيل البياني.',
            slug: '/tcl/m2-u2',
            term: 2,
            status: 'planned',
            estimatedMinutes: 8
          },
          {
            id: 'tcl-m2-u3',
            unitNumber: 3,
            title: 'العروض التقديمية PowerPoint',
            shortDesc: 'تصميم شرائح تفاعلية، المؤثرات الحركية، وإلقاء العروض والمشاريع الصفية.',
            slug: '/tcl/m2-u3',
            term: 3,
            status: 'planned',
            estimatedMinutes: 7
          }
        ]
      },
      {
        id: 'tcl-d3',
        domainNumber: 3,
        title: 'المجال 03: تقنيات الويب والتواصل',
        color: 'from-emerald-500 to-teal-600',
        icon: '🌐',
        description: 'البحث والتوثيق الأكاديمي، أساسيات صفحات الويب HTML، والتواصل الرقمي الآمن.',
        units: [
          {
            id: 'tcl-m3-u1',
            unitNumber: 1,
            title: 'المتصفحات ومحركات البحث والتوثيق',
            shortDesc: 'مهارات البحث المتقدم، التحقق من المصادر ومصداقية المعلومات على الويب.',
            slug: '/tcl/m3-u1',
            term: 3,
            status: 'planned',
            estimatedMinutes: 5
          },
          {
            id: 'tcl-m3-u2',
            unitNumber: 2,
            title: 'مدخل إلى تصميم صفحات الويب HTML',
            shortDesc: 'الوسوم الأساسية لإنشاء صفحة مقال إخباري بسيط وتنسيق النصوص.',
            slug: '/tcl/m3-u2',
            term: 3,
            status: 'planned',
            estimatedMinutes: 7
          },
          {
            id: 'tcl-m3-u3',
            unitNumber: 3,
            title: 'البريد وأدوات التعاون السحابي',
            shortDesc: 'المراسلات الإلكترونية الرسمية، التعاون الجماعي في المستندات السحابية.',
            slug: '/tcl/m3-u3',
            term: 3,
            status: 'planned',
            estimatedMinutes: 5
          }
        ]
      }
    ]
  }
};
